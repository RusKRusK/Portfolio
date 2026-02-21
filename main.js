/* ============================================
   RusK Portfolio — メインスクリプト
   GSAP ScrollTrigger + Lenis + モーダル
   ============================================ */

// ==========================
// スムーズスクロール (Lenis)
// ==========================
let lenis;
function initLenis() {
    // Lenisインスタンスを生成し、スムーズスクロールを設定
    lenis = new Lenis({
        duration: 1.2, // スクロールの補間にかかる時間（秒）
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // イージング関数（指数関数的な減速）
        smooth: true,
    });

    // requestAnimationFrameループでLenisを更新
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // LenisのスクロールイベントとGSAP ScrollTriggerを同期
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0); // ラグ補正を無効化（Lenisとの競合を防ぐ）
}

// ==========================
// ナビゲーション
// ==========================
function initNav() {
    const header = document.getElementById("site-header");
    const toggle = document.querySelector(".nav-toggle");
    const links = document.querySelector(".nav-links");

    // スクロール位置に応じてヘッダーの見た目を変更
    // 80px以上スクロールしたら半透明の背景+ブラーを適用
    window.addEventListener("scroll", () => {
        if (window.scrollY > 80) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // モバイル用ハンバーガーメニューの開閉
    toggle.addEventListener("click", () => {
        links.classList.toggle("active");
    });

    // ナビリンククリック時：モバイルメニューを閉じ、Lenisでスムーズスクロール
    document.querySelectorAll(".nav-links a").forEach((link) => {
        link.addEventListener("click", (e) => {
            links.classList.remove("active");
            e.preventDefault();
            const target = document.querySelector(link.getAttribute("href"));
            if (target && lenis) {
                lenis.scrollTo(target, { offset: -80 }); // ヘッダー分のオフセットを確保
            }
        });
    });

    // ヒーローセクションのCTAボタン（「作品を見る↓」）のスムーズスクロール
    const cta = document.querySelector(".hero-cta");
    if (cta) {
        cta.addEventListener("click", (e) => {
            e.preventDefault();
            const target = document.querySelector(cta.getAttribute("href"));
            if (target && lenis) {
                lenis.scrollTo(target, { offset: -80 });
            }
        });
    }
}

// ==========================
// モーダル（プロジェクト詳細表示）
// ==========================
function initModal() {
    const overlay = document.getElementById("modal-overlay");
    const closeBtn = overlay.querySelector(".modal-close");
    const body = overlay.querySelector(".modal-body");

    // 閉じるボタン、オーバーレイクリック、Escキーでモーダルを閉じる
    closeBtn.addEventListener("click", closeModal);
    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) closeModal();
    });
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeModal();
    });

    // モーダル内のスクロールイベントがLenisに伝播しないようにする
    // これにより、モーダル内はネイティブスクロール、背景はスクロール不可になる
    overlay.addEventListener("wheel", (e) => {
        e.stopPropagation();
    }, { passive: true });
    overlay.addEventListener("touchmove", (e) => {
        e.stopPropagation();
    }, { passive: true });

    /**
     * プロジェクトの詳細をモーダルで表示する
     * @param {Object} item - projects.jsの各アイテムデータ
     */
    window.openProjectModal = function (item) {
        body.innerHTML = ""; // 前の内容をクリア

        // タイトル
        const h3 = document.createElement("h3");
        h3.textContent = item.title;
        body.appendChild(h3);

        // 説明文（HTMLタグを含む）
        const desc = document.createElement("div");
        desc.className = "modal-desc";
        desc.innerHTML = item.description;
        body.appendChild(desc);

        // 外部リンク（リポジトリやサイトへのリンク）
        if (item.links && item.links.length > 0) {
            const linksDiv = document.createElement("div");
            linksDiv.className = "modal-links";
            item.links.forEach((link) => {
                const a = document.createElement("a");
                a.className = "modal-link";
                a.href = link.url;
                a.target = "_blank"; // 別タブで開く
                a.textContent = link.text;
                linksDiv.appendChild(a);
            });
            body.appendChild(linksDiv);
        }

        // メディア（画像・動画）
        if (item.media && item.media.length > 0) {
            const mediaDiv = document.createElement("div");
            mediaDiv.className = "modal-media";
            item.media.forEach((m) => {
                if (m.type === "image") {
                    const img = document.createElement("img");
                    img.src = m.src;
                    if (m.alt) img.alt = m.alt;
                    img.loading = "lazy"; // 遅延読み込み
                    mediaDiv.appendChild(img);
                } else if (m.type === "video") {
                    const video = document.createElement("video");
                    video.src = m.src;
                    video.controls = true;
                    video.preload = "metadata"; // メタデータのみ事前読み込み
                    mediaDiv.appendChild(video);
                }
            });
            body.appendChild(mediaDiv);
        }

        // モーダルを表示し、背景のスクロールを無効化
        overlay.classList.add("active");
        document.body.style.overflow = "hidden";
    };

    /** モーダルを閉じてスクロールを再有効化 */
    function closeModal() {
        overlay.classList.remove("active");
        document.body.style.overflow = "";
    }
}

// ==========================
// プロジェクト一覧の描画（横スクロール用）
// ==========================
function renderProjects(data) {
    const container = document.getElementById("project-list");
    if (!container) return;

    // カテゴリ名に対応する絵文字のマッピング
    const categoryEmojis = {
        Deno: "🦕",
        チーム制作: "👥",
        "Gemini API": "✨",
        "CUI / TUIシリーズ": "💻",
        ゲーム制作: "🎮",
        その他: "📌",
    };

    // 横スクロール: カテゴリヘッダーとカードをフラットに panels コンテナへ追加
    data.forEach((category) => {
        const emoji = categoryEmojis[category.categoryTitle] || "📁";

        // カテゴリヘッダーパネル（横並びの区切りカード）
        const catPanel = document.createElement("div");
        catPanel.className = "category-panel";

        const title = document.createElement("h3");
        title.className = "category-title";
        title.textContent = `${emoji} ${category.categoryTitle}`;
        catPanel.appendChild(title);

        const desc = document.createElement("p");
        desc.className = "category-desc";
        desc.innerHTML = category.categoryDescription;
        catPanel.appendChild(desc);

        container.appendChild(catPanel);

        // 各プロジェクトカードを直接 panels コンテナに追加
        category.items.forEach((item) => {
            const card = document.createElement("div");
            card.className = "project-card";

            // サムネイル画像
            if (item.media && item.media.length > 0) {
                const firstImage = item.media.find((m) => m.type === "image");
                if (firstImage) {
                    const img = document.createElement("img");
                    img.className = "project-card-thumb";
                    img.src = firstImage.src;
                    img.alt = firstImage.alt || item.title;
                    img.loading = "lazy";
                    card.appendChild(img);
                } else {
                    const ph = document.createElement("div");
                    ph.className = "project-card-thumb-placeholder";
                    ph.textContent = emoji;
                    card.appendChild(ph);
                }
            } else {
                const ph = document.createElement("div");
                ph.className = "project-card-thumb-placeholder";
                ph.textContent = emoji;
                card.appendChild(ph);
            }

            // カード本文
            const body = document.createElement("div");
            body.className = "project-card-body";

            const cardTitle = document.createElement("h4");
            cardTitle.className = "project-card-title";
            cardTitle.textContent = item.title;
            body.appendChild(cardTitle);

            // 説明文からHTMLタグを除去して抜粋テキストを生成
            const tmpDiv = document.createElement("div");
            tmpDiv.innerHTML = item.description;
            const plainText = tmpDiv.textContent || tmpDiv.innerText;
            const excerpt = document.createElement("p");
            excerpt.className = "project-card-excerpt";
            excerpt.textContent = plainText;
            body.appendChild(excerpt);

            // カテゴリ名のタグバッジ
            const tag = document.createElement("span");
            tag.className = "project-card-tag";
            tag.textContent = category.categoryTitle;
            body.appendChild(tag);

            card.appendChild(body);

            // カードクリックでモーダルを開く
            card.addEventListener("click", () => {
                window.openProjectModal(item);
            });

            container.appendChild(card);
        });
    });
}

// ==========================
// スキル一覧の描画
// ==========================
// 2つのデータ形式に対応:
//   items: ["Python", "C"]                    （旧形式: 文字列配列 → タグ表示）
//   items: [{ name: "Python", level: 90 }]    （新形式: オブジェクト配列 → プログレスバー表示）
function renderSkills(skillsData) {
    const container = document.getElementById("skill-list");
    if (!container) return;

    skillsData.forEach((category) => {
        const catDiv = document.createElement("div");
        catDiv.className = "skill-category gs-hidden"; // GSAPアニメーション用の初期状態

        // カテゴリ名の見出し
        const h3 = document.createElement("h3");
        h3.textContent = category.category;
        catDiv.appendChild(h3);

        const listDiv = document.createElement("div");
        listDiv.className = "skill-list";

        category.items.forEach((skill) => {
            // データ形式を判定（オブジェクトか文字列か）
            const isObject = typeof skill === "object" && skill !== null;
            const skillName = isObject ? skill.name : skill;
            const skillLevel = isObject ? skill.level : null;

            if (skillLevel !== null) {
                // 新形式: プログレスバーで習熟度を表示
                const barContainer = document.createElement("div");
                barContainer.className = "skill-bar-container gs-scale-hidden";

                // スキル名とレベル表示の行
                const labelRow = document.createElement("div");
                labelRow.className = "skill-bar-label";

                const nameSpan = document.createElement("span");
                nameSpan.className = "skill-bar-name";
                nameSpan.textContent = skillName;
                labelRow.appendChild(nameSpan);

                // レベルのパーセンテージ表示（コメントアウト中）
                const levelSpan = document.createElement("span");
                levelSpan.className = "skill-bar-level";
                // levelSpan.textContent = `${skillLevel}%`;
                labelRow.appendChild(levelSpan);

                barContainer.appendChild(labelRow);

                // プログレスバーのトラック（背景）とフィル（塗り）
                const track = document.createElement("div");
                track.className = "skill-bar-track";

                const fill = document.createElement("div");
                fill.className = "skill-bar-fill";
                fill.style.width = "0%"; // 初期幅は0%（GSAPで目標値までアニメーション）
                fill.dataset.level = skillLevel; // data属性にレベル値を保持
                track.appendChild(fill);

                barContainer.appendChild(track);
                listDiv.appendChild(barContainer);
            } else {
                // 旧形式: タグバッジとして表示
                const span = document.createElement("span");
                span.className = "skill-tag gs-scale-hidden";
                span.textContent = skillName;
                listDiv.appendChild(span);
            }
        });

        catDiv.appendChild(listDiv);
        container.appendChild(catDiv);
    });
}

// ==========================
// プロフィール・コンタクトの描画
// ==========================
function renderProfile(profileData) {
    // ---- 自己紹介セクション ----
    const aboutContainer = document.getElementById("about-me");
    if (aboutContainer) {
        const container = document.createElement("div");
        container.className = "profile-container gs-hidden";

        // プロフィールアイコン
        if (profileData.iconUrl) {
            const img = document.createElement("img");
            img.src = profileData.iconUrl;
            img.alt = "プロフィールアイコン";
            img.className = "profile-icon";
            container.appendChild(img);
        }

        // 名前と自己紹介文
        const infoDiv = document.createElement("div");
        infoDiv.className = "profile-info";

        const nameH2 = document.createElement("h2");
        nameH2.className = "profile-name";
        nameH2.textContent = profileData.name;
        infoDiv.appendChild(nameH2);

        const descP = document.createElement("p");
        descP.className = "profile-description";
        descP.innerHTML = profileData.about;
        infoDiv.appendChild(descP);

        container.appendChild(infoDiv);
        aboutContainer.appendChild(container);
    }

    // ---- コンタクトセクション ----
    const contactContainer = document.getElementById("contact-area");
    if (contactContainer) {
        const section = document.createElement("div");
        section.className = "profile-section";

        const linksDiv = document.createElement("div");
        linksDiv.className = "contact-links";

        // 各コンタクト情報をボタンとして描画
        profileData.contact.forEach((contact) => {
            const a = document.createElement("a");
            a.className = "contact-link gs-hidden";
            a.href = contact.url;
            a.target = "_blank";

            // spanで囲むことで、ホバー時のグラデーション背景の上にテキストを表示
            const span = document.createElement("span");
            span.textContent = contact.platform;
            a.appendChild(span);

            linksDiv.appendChild(a);
        });

        section.appendChild(linksDiv);
        contactContainer.appendChild(section);
    }
}

// ==========================
// GSAPアニメーション
// ==========================
function initAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    // ---- ヒーローセクションの登場アニメーション（ページ読み込み時） ----
    const heroTl = gsap.timeline({ delay: 0.3 }); // 0.3秒後に開始
    heroTl
        // 「Hello! I'm」テキストが上にフェードイン
        .from(".hero-greeting", {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: "power2.out",
        })
        // 名前「RusK」が弾むようにスケールイン
        .from(
            ".hero-name",
            {
                opacity: 0,
                scale: 0.8,
                duration: 1,
                ease: "elastic.out(1, 0.6)", // 弾むイージング
            },
            "-=0.4", // 前のアニメーション完了0.4秒前に開始（オーバーラップ）
        )
        // タグライン（肩書き）がフェードイン
        .from(
            ".hero-tagline",
            {
                opacity: 0,
                y: 20,
                duration: 0.6,
                ease: "power2.out",
            },
            "-=0.5",
        )
        // CTAボタンがポップイン
        .from(
            ".hero-cta",
            {
                opacity: 0,
                scale: 0.7,
                duration: 0.8,
                ease: "elastic.out(1, 0.5)",
            },
            "-=0.3",
        );

    // ---- 背景の浮遊シェイプアニメーション（無限ループ） ----
    gsap.to(".shape-1", {
        y: -30,
        x: 20,
        duration: 6,
        repeat: -1, // 無限繰り返し
        yoyo: true, // 行き来する
        ease: "sine.inOut",
    });
    gsap.to(".shape-2", {
        y: 25,
        x: -15,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
    });
    gsap.to(".shape-3", {
        y: -20,
        x: 10,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
    });
    gsap.to(".shape-4", {
        y: 15,
        x: -20,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
    });

    // ---- セクションタイトルのスクロール連動アニメーション ----
    // 画面の85%の位置に来たら、下からバウンスしながらフェードイン
    gsap.utils.toArray(".section-title").forEach((title) => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: "top 85%", // 要素の上端が画面の85%に達したら発火
                toggleActions: "play none none none", // 一度だけ再生
            },
            opacity: 0,
            y: 40,
            duration: 0.8,
            ease: "back.out(1.7)", // 少しオーバーシュートするイージング
        });
    });

    // ---- セクション区切り線のスケールアニメーション ----
    gsap.utils.toArray(".section-line").forEach((line) => {
        gsap.from(line, {
            scrollTrigger: {
                trigger: line,
                start: "top 85%",
                toggleActions: "play none none none",
            },
            scaleX: 0, // 横幅0から伸びる
            duration: 0.6,
            ease: "power2.out",
            delay: 0.3,
        });
    });

    // ---- 作品集セクションの横スクロール ----
    // 縦スクロールに連動して、panelsコンテナを横方向にスクロールさせる
    const panels = document.querySelector(".panels");
    if (panels) {
        gsap.to(panels, {
            x: () => -(panels.scrollWidth - window.innerWidth),
            ease: "none",
            scrollTrigger: {
                trigger: ".panels-wrapper",
                start: "top 60px", // 固定ヘッダーの高さ分オフセット
                end: () => "+=" + (panels.scrollWidth - window.innerWidth),
                pin: true, // セクションを画面に固定
                scrub: 1, // スクロール位置に連動（1秒の遅延で滑らかに）
                invalidateOnRefresh: true, // リサイズ時に再計算
            },
        });
    }

    // ---- スキルカテゴリのアニメーション ----
    gsap.utils.toArray(".skill-category").forEach((cat) => {
        // カテゴリ全体のフェードイン
        gsap.to(cat, {
            scrollTrigger: {
                trigger: cat,
                start: "top 85%",
                toggleActions: "play none none none",
            },
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
        });

        // 旧形式: タグのポップインアニメーション（弾むイージング）
        const tags = cat.querySelectorAll(".skill-tag");
        if (tags.length) {
            gsap.to(tags, {
                scrollTrigger: {
                    trigger: cat,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
                opacity: 1,
                scale: 1, // gs-scale-hiddenのscale(0.5)を解除
                duration: 0.5,
                stagger: 0.06,
                ease: "elastic.out(1, 0.5)", // 弾むようにポップイン
                delay: 0.3,
            });
        }

        // 新形式: プログレスバーのアニメーション
        const bars = cat.querySelectorAll(".skill-bar-container");
        if (bars.length) {
            // バーコンテナ自体のフェードイン
            gsap.to(bars, {
                scrollTrigger: {
                    trigger: cat,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
                opacity: 1,
                scale: 1,
                duration: 0.5,
                stagger: 0.08, // 各バーを0.08秒ずつ遅らせて表示
                ease: "power2.out",
                delay: 0.2,
            });

            // プログレスバーの塗りを0%からdata-level値までアニメーション
            const fills = cat.querySelectorAll(".skill-bar-fill");
            fills.forEach((fill) => {
                gsap.to(fill, {
                    scrollTrigger: {
                        trigger: cat,
                        start: "top 75%",
                        toggleActions: "play none none none",
                    },
                    width: fill.dataset.level + "%", // data-level属性のパーセンテージまで伸ばす
                    duration: 0.6,
                    ease: "power2.out",
                    delay: 0.5,
                });
            });
        }
    });

    // ---- プロフィールセクションのフェードイン ----
    const profile = document.querySelector(".profile-container");
    if (profile) {
        gsap.to(profile, {
            scrollTrigger: {
                trigger: profile,
                start: "top 85%",
                toggleActions: "play none none none",
            },
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
        });
    }

    // ---- コンタクトリンクの時間差フェードイン ----
    const contactLinks = document.querySelectorAll(".contact-link");
    if (contactLinks.length) {
        gsap.to(contactLinks, {
            scrollTrigger: {
                trigger: contactLinks[0],
                start: "top 90%",
                toggleActions: "play none none none",
            },
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "back.out(1.7)", // バウンスするイージング
        });
    }
}

// ==========================
// 初期化 — DOM読み込み完了後に実行
// ==========================
document.addEventListener("DOMContentLoaded", () => {
    // コンテンツの描画（projects.js / skills.js のデータを元にDOMを生成）
    renderProjects(projects);
    if (typeof skills !== "undefined") renderSkills(skills);
    if (typeof profile !== "undefined") renderProfile(profile);

    // 各機能の初期化
    initLenis(); // スムーズスクロール
    initNav(); // ナビゲーション
    initModal(); // モーダル

    // DOMの描画完了を待ってからGSAPアニメーションを開始
    requestAnimationFrame(() => {
        initAnimations();
    });
    animateTitle();
});

function animateTitle() {
    let titleText = "ポートフォリオ_★═━┈_RusK_★═━┈_";
    document.title = titleText;

    setInterval(() => {
        titleText = titleText.substring(1) + titleText.substring(0, 1);
        document.title = titleText;
    }, 400);
}

document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});
document.addEventListener("keydown", function (e) {
    // F12キー
    if (e.key === "F12" || e.keyCode === 123) {
        e.preventDefault();
    }

    // Ctrl + Shift + I (または Cmd + Opt + I on Mac)
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === "I") {
        e.preventDefault();
    }

    // Ctrl + Shift + J (または Cmd + Opt + J on Mac)
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === "J") {
        e.preventDefault();
    }

    // Ctrl + Shift + C (または Cmd + Opt + C on Mac)
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === "C") {
        e.preventDefault();
    }
});
