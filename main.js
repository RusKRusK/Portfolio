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
});
