function renderProjects(data) {
    const app = document.getElementById("project-list");
    if (!app) return;

    data.forEach((category) => {
        // カテゴリごとにコンテナを作成
        const container = document.createElement("div");
        container.className = "container";

        // カテゴリのタイトルと説明を追加
        const h2 = document.createElement("h2");
        h2.textContent = category.categoryTitle;
        container.appendChild(h2);

        const p = document.createElement("p");
        p.innerHTML = category.categoryDescription;
        container.appendChild(p);

        // アイテムを生成
        category.items.forEach((item) => {
            // 折り畳み
            const details = document.createElement("details");

            const summary = document.createElement("summary");
            summary.textContent = item.title;
            details.appendChild(summary);

            const desc = document.createElement("p");
            desc.className = "project-desc";
            desc.innerHTML = item.description;
            details.appendChild(desc);

            // リンクがあれば追加
            if (item.links && item.links.length > 0) {
                item.links.forEach((link) => {
                    const a = document.createElement("a");
                    a.className = "project-link";
                    a.href = link.url;
                    a.target = "_blank"; // 別タブで開く
                    a.textContent = link.text;
                    details.appendChild(a);
                    details.appendChild(document.createElement("br"));
                });
            }

            // メディアがあれば表示
            if (item.media && item.media.length > 0) {
                const mediaDiv = document.createElement("div");
                mediaDiv.className = "project-media";

                item.media.forEach((mediaItem) => {
                    if (mediaItem.type === "image") {
                        const img = document.createElement("img");
                        img.src = mediaItem.src;
                        if (mediaItem.alt) img.alt = mediaItem.alt;
                        mediaDiv.appendChild(img);
                    } else if (mediaItem.type === "video") {
                        const video = document.createElement("video");
                        video.src = mediaItem.src;
                        video.controls = true;
                        mediaDiv.appendChild(video);
                    }
                });
                details.appendChild(mediaDiv);
            }

            container.appendChild(details);
        });

        // 最後にDOMに追加
        app.appendChild(container);
    });
}

// DOM読み込み完了後に実行
document.addEventListener("DOMContentLoaded", () => {
    renderProjects(projects);
    if (typeof skills !== "undefined") renderSkills(skills);
    if (typeof profile !== "undefined") renderProfile(profile);
});

function renderSkills(skillsData) {
    const container = document.getElementById("skill-list");
    if (!container) return;

    const h1 = document.createElement("h1");
    h1.textContent = "スキル";
    container.appendChild(h1);

    skillsData.forEach((category) => {
        const catDiv = document.createElement("div");
        catDiv.className = "skill-category";

        const h3 = document.createElement("h3");
        h3.textContent = category.category;
        catDiv.appendChild(h3);

        const listDiv = document.createElement("div");
        listDiv.className = "skill-list";

        category.items.forEach((skill) => {
            const span = document.createElement("span");
            span.className = "skill-tag";
            span.textContent = skill;
            listDiv.appendChild(span);
        });

        catDiv.appendChild(listDiv);
        container.appendChild(catDiv);
    });
}

function renderProfile(profileData) {
    // About Me
    const aboutContainer = document.getElementById("about-me");
    if (aboutContainer) {
        const h1 = document.createElement("h1");
        h1.textContent = "自己紹介";
        aboutContainer.appendChild(h1);

        const container = document.createElement("div");
        container.className = "profile-container";

        // Icon
        if (profileData.iconUrl) {
            const img = document.createElement("img");
            img.src = profileData.iconUrl;
            img.alt = "プロフィールアイコン";
            img.className = "profile-icon";
            container.appendChild(img);
        }

        // Info
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

    // Contact
    const contactContainer = document.getElementById("contact");
    if (contactContainer) {
        const h1 = document.createElement("h1");
        h1.textContent = "コンタクト";
        contactContainer.appendChild(h1);

        const section = document.createElement("div");
        section.className = "profile-section";

        const linksDiv = document.createElement("div");
        linksDiv.className = "contact-links";

        profileData.contact.forEach((contact) => {
            const a = document.createElement("a");
            a.className = "contact-link";
            a.href = contact.url;
            a.textContent = contact.platform; // or contact.text
            a.target = "_blank";
            linksDiv.appendChild(a);
        });

        section.appendChild(linksDiv);
        contactContainer.appendChild(section);
    }
}
