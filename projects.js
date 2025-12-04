const projects = [
    {
        categoryTitle: "Deno",
        categoryDescription:
            "Deno, Deno Deploy, Deno KVなどを使用した作品です。<br>主にTypeScriptを使用しています。",
        items: [
            {
                title: "ブログ",
                description:
                    `このブログは、<strong>Deno</strong>と<strong>TypeScript</strong>を用いて、サーバーサイドのロジックからフロントエンドの表示まで一貫して構築したWebアプリケーションです。データベースには<strong>Deno KV</strong>を使用し、訪問者カウンターや掲示板といった動的コンテンツを実現しました。<br>記事はMarkdownで管理し、サーバー側でHTMLに動的変換して配信しています。これにより、HTMLを直接編集する必要がなく、記事の管理が容易になりました。また、掲示板のリアルタイム更新は、WebSocketの代わりにポーリングという手法を用いることで、実装の複雑さを抑えつつ実用的な機能を確保しました。`,
                links: [
                    {
                        text: "→ ブログサイトを見る",
                        url: "https://ruskrusk-blog-67.deno.dev/",
                    },
                ],
                media: [
                    {
                        type: "image",
                        src: "./images/blog1.png",
                        alt: "スクリーンショット1",
                    },
                    {
                        type: "image",
                        src: "https://ruskrusk.github.io/BlogResources/images/010bbs.png",
                        alt: "スクリーンショット2",
                    },
                ],
            },
            {
                title: "Watch Toguesser",
                description:
                    `<strong>緻密な要件定義 × AI実装で実現した、YouTube動画を使ったリアルタイム心理戦ゲーム</strong><br><br>YouTube動画の同時視聴と「人狼ゲーム」の要素を組み合わせた、Webブラウザで遊べるマルチプレイ・パーティーゲームです。 参加者は「親」と「子（偽物）」に分かれ、動画を選出。全員で同時視聴した後、「誰が親の動画を選んだか」を推理し合います。<br><br>本プロジェクトは、「仕様駆動開発」と「AIコーディング」を融合させた実験的な試みとして開発されました。過去にDiscord上で行っていたアナログなゲームルールを体系化し、親バレ時の得点計算や通信切断時の挙動といったエッジケースまで網羅した詳細な仕様書を作成した上で、実装の大部分をAIエディタに委任することで、人間が「仕様策定」「レビュー」「検証」といった上位工程に集中する次世代の開発フローを実践しています。また技術面では、Deno/Freshを採用し、WebSocketを用いた再生状態（再生・停止・シーク）の完全同期を実現するなど、モダンかつ高速なデプロイ環境を構築しました。<br><br>ルールは複雑ですが、友人同士で遊ぶとかなり面白いゲームです。ルールの詳細は、リポジトリをご覧ください。`,
                links: [
                    {
                        text: "→ リポジトリを見る",
                        url: `https://github.com/RusKRusK/WatchTogetherGame`,
                    },
                    {
                        text: "→ ゲームを遊ぶ",
                        url: "https://watch-toguesser.deno.dev/",
                    },
                ],
                media: [
                    {
                        type: "image",
                        src: "./images/toguesser1.png",
                        alt: "スクリーンショット1",
                    },
                ],
            },
        ],
    },
    {
        categoryTitle: "チーム制作",
        categoryDescription: "チームでの制作物です。",
        items: [
            {
                title: "Ascii Art Pin",
                description:
                    `<strong>描いて、見つけて、戦わせる。誰もがアスキーアートで繋がる創作遊び場</strong><br><br>このウェブアプリケーションは、アスキーアート（アスキーアート）の作成から共有、さらには作成したアスキーアートを使った対戦ゲームまで、一貫して楽しめる総合的なプラットフォームです。<br>「アスキーアートを作ってみたいけど作り方がわからない」「どんなアスキーアートがあるのか見てみたい」といったニーズに応え、誰もが気軽にアスキーアート文化に触れ、参加できる場所を提供します。<br><br>この作品は株式会社jig.jp様のサマーインターンシップにて、チームで開発したものです。<br>私はプロジェクトオーナーとして、チームメンバーを取りまとめました。実装面では、主にフロントエンドを実装し、チームメンバーと協力して開発しました。`,
                links: [
                    {
                        text: "→ リポジトリを見る",
                        url: "https://github.com/jigintern/2025-summer-a",
                    },
                    {
                        text: "→ サイトを見る",
                        url: "https://ruskrusk-2025-summer-30.deno.dev/",
                    },
                ],
                media: [
                    {
                        type: "image",
                        src: "./images/aap1.png",
                        alt: "スクリーンショット1",
                    },
                    {
                        type: "image",
                        src: "./images/aap2.png",
                        alt: "スクリーンショット2",
                    },
                ],
            },
            {
                title: "Treasure on Find",
                description:
                    `「スタンプラリー×クイズ」で学校・企業見学をサポートする、スマホ向けWebサイトです。<br>アプリの企画と、コンパスなどのUIのデザインを担当しました。<br>コンパスやマップを駆使して、現地のQRコードを探します。QRコードを読み取ることでポイント獲得、自動的に始まるクイズに正解するとさらにポイントが獲得できます。これらを繰り返すことで楽しく学校・企業見学をサポートできます。<br>本作品は、2023年度の日タイ高校生ICTフェアに向けた、2つ下の学年の後輩のサポートとして参加し、5人のチームで協力して最後まで開発を行いました。`,
                links: [
                    {
                        text: "→ リポジトリを見る",
                        url: "https://github.com/Wholesome-Student/ToF",
                    },
                    {
                        text: "→ サイトを見る",
                        url: "https://tof.deno.dev/unsupporteddevice.html",
                    },
                ],
                media: [
                    {
                        type: "image",
                        src: "./images/tof1.png",
                        alt: "スクリーンショット1",
                    },
                ],
            },
        ],
    },
    {
        categoryTitle: "Gemini API",
        categoryDescription:
            "Googleの提供するLLM(大規模言語モデル)である、GeminiのAPIを用いた作品です。",
        items: [
            {
                title: "Discord Bot",
                description:
                    `Discordサーバー内でのコミュニケーションを支援する多機能Botです。<br>
                友人とのDiscordサーバーでの運用を想定して開発されており、「モザイク機能」では、NSFWな画像に対して一定数のリアクションが付くと、自動で画像をモザイク処理し、元画像を専用スレッドへ非通知で複製、元のメッセージを削除します。<br>
                「Starboard機能」では、特定のリアクション数を超えたメッセージを専用チャンネルへ自動転送し、注目メッセージを一覧できるようにしました。閾値やモザイク強度は管理者向けのスラッシュコマンドで柔軟に設定可能です。<br>さらに、Gemini
                APIを活用した画像説明機能も備えております、ただし、Geminiの利用規約では、NSFWなコンテンツの取り扱いを禁止しています。そのため、ユーザーがアップロードした画像をGeminiに送信する前に、nsfwjsというtensorflowのモデルを使用することで、画像が適切かどうかを判定して、不適切な画像を自動的にはじくようにしました。NSFW対策やAIとの連携、ユーザー権限管理など、実際の運用を想定した設計を重視しました。`,
                links: [
                    {
                        text: "→ リポジトリを見る",
                        url: "https://github.com/RusKRusK/RusKMon",
                    },
                ],
                media: [
                    {
                        type: "image",
                        src: "./images/discordbot1.png",
                        alt: "スクリーンショット1",
                    },
                    {
                        type: "image",
                        src: "./images/discordbot2.png",
                        alt: "スクリーンショット2",
                    },
                ],
            },
            {
                title: "Gemini チャットアプリ",
                description:
                    `このチャットアプリケーションは、<strong>Google Gemini API</strong>を活用し、ユーザーとAIの円滑な対話を可能にします。GUIフレームワークには<strong>PyQt5を採用</strong>しております。また、<strong>ダークテーマにも対応</strong>しました。画像、動画、音声、PDFといった多様なメディア形式に対応しています。さらに、ユーザーが任意の「システムインタラクション」を設定できます。これにより、AIに特定のキャラクターを演じさせたり、特定の専門分野に特化させたりと、ニーズに合わせたパーソナライズされた対話が可能です。また、マークダウン表示に対応しており、AIの応答を美しい文章として表示することができます。`,
                links: [
                    {
                        text: "→ リポジトリを見る",
                        url: "https://github.com/RusKRusK/GeminiChatApp",
                    },
                ],
                media: [
                    {
                        type: "image",
                        src: "./images/gemini1.png",
                        alt: "スクリーンショット1",
                    },
                    {
                        type: "image",
                        src: "./images/gemini2.png",
                        alt: "スクリーンショット2",
                    },
                    {
                        type: "image",
                        src: "./images/gemini3.png",
                        alt: "スクリーンショット3",
                    },
                    {
                        type: "image",
                        src: "./images/gemini4.png",
                        alt: "スクリーンショット4",
                    },
                ],
            },
        ],
    },
    {
        categoryTitle: "CUI / TUIシリーズ",
        categoryDescription: `CUI（Character User
            Interface）環境における表現力の限界に挑んだ作品です。<br>本シリーズでは、ANSIエスケープシーケンスによる文字色の変更やカーソル制御といった低レイヤ機能を駆使し、3D迷路やグラフ描画、ペイントソフトなど、GUIに匹敵する視覚体験をターミナル上で実現しています。<br>限られた手段の中でいかにインタラクティブ性や視認性を高めるか、アルゴリズムとデザインの両面から試行錯誤を重ねました。<br>CやC++で記述されたプログラムは、Raspberry
            Piなどの比較的低スペックな環境でも動作可能なことを目指し、標準出力によってグラフィックを表現しています。<br>当初は趣味としてペイントソフトやグラフ描画ツールの開発を行っていましたが、やがて学園祭のクラス展示『白黒世界からの脱出』のギミックの一つとして、3D迷路が採用されるに至りました。`,
        items: [
            {
                title: "CUI 3D迷路",
                description:
                    `Linuxのターミナル上で動作する、完全テキストベースの3D風迷路ゲームです。<br>学園祭のクラス展示企画「白黒世界からの脱出」に合わせて制作した作品です。<br>配色はモノクロに統一し、テーマに沿った世界観を構築しました。<br>迷路をクリアすると、宝箱が開き「パレットを手に入れた」という演出がアスキーアートのアニメーションで表示されます。<br>本作は、ANSIのエスケープシーケンスによる文字色の変更とカーソル位置の指定を使用しています。<br>これによって、CUI環境でも疑似的な3D表現を実現しています。<br>いわゆる『DOOM』のような、前後移動と左右の視点回転が可能です。`,
                links: [
                    {
                        text: "→ リポジトリを見る",
                        url: "https://github.com/RusKRusK/CUI-maze",
                    },
                ],
                media: [
                    { type: "video", src: "./movies/cuimaze.mp4" },
                    {
                        type: "image",
                        src: "./images/cuimaze1.png",
                        alt: "スクリーンショット1",
                    },
                    {
                        type: "image",
                        src: "./images/cuimaze2.png",
                        alt: "スクリーンショット2",
                    },
                ],
            },
            {
                title: "CUI グラフ描画ツール",
                description:
                    `Linuxのターミナル上で動作する、完全テキストベースのグラフ描画ツールです。<br>ANSIのエスケープシーケンスを用いた文字色の変更により、複数のグラフの描画を可能にしています。<br>グラフは、曲線の太さが常に一定になるように描画します。単にy座標だけを引き伸ばすと、曲線の傾きによってグラフの太さが変わってきてしまいます。<br>そこで本作品では、微分や三角関数などの数学的な操作を用いることで、グラフの傾きによらず、一定の太さでグラフを描画する処理を実現しました。`,
                links: [
                    {
                        text: "→ リポジトリを見る",
                        url: "https://github.com/RusKRusK/CUI-graph",
                    },
                ],
                media: [
                    {
                        type: "image",
                        src: "./images/cuigraph1.png",
                        alt: "スクリーンショット1",
                    },
                ],
            },
            {
                title: "CUI ペイントソフト",
                description:
                    `Linuxのターミナル上で動作する、完全テキストベースのペイントツールです。<br>ANSIのエスケープシーケンスにを用いた文字色と背景色の変更により、空白文字に色を付けた、ドット絵のような表現が可能です。<br>作成したイラストは、他のCUIソフトウェアに流用できるように、「printf関数」や「二次元配列」としてエクスポートできます。2枚目の画像は、制作したイラストを色番号の二次元配列として出力している様子です。<br>他にも、イラストのセーブとロードや左右反転など、自身にとってより使いやすいドット絵制作ソフトを追求しました。`,
                links: [
                    {
                        text: "→ リポジトリを見る",
                        url: "https://github.com/RusKRusK/CUI-paint",
                    },
                ],
                media: [
                    {
                        type: "image",
                        src: "./images/cuipaint1.png",
                        alt: "スクリーンショット1",
                    },
                    {
                        type: "image",
                        src: "./images/cuipaint2.png",
                        alt: "スクリーンショット2",
                    },
                ],
            },
            {
                title: "CUI イラスト3D表示",
                description:
                    `Linuxのターミナル上で動作する、完全テキストベースで疑似的に3D表示をするプログラムです。<br>CUI
                ペイントソフトで作成したイラストの上を飛び回るように見ることができ、作成したイラストを別の視点で体験できます。<br>単純な線形変換ではなく、三角関数などの数学的操作と座標計算によって、奥行きを感じられるような3D表示を実現しています。`,
                links: [
                    {
                        text: "→ リポジトリを見る",
                        url: "https://github.com/RusKRusK/CUI-3D",
                    },
                ],
                media: [
                    { type: "video", src: "./movies/cui3d.mp4" },
                    {
                        type: "image",
                        src: "./images/cui3d.png",
                        alt: "スクリーンショット1",
                    },
                ],
            },
            {
                title: "TUI 流体シミュレーション",
                description:
                    `ターミナル上で動作する流体シミュレーションです。上記のCUIシリーズの作品はC言語で実装しましたが、こちらはPythonのTextualフレームワークを用いて実装しました。よりリッチな見た目で、マウス操作も可能となっています。初期状態をテキストファイルから読み込むことができ、好きなように流体を動かすことができます。`,
                links: [
                    {
                        text: "→ リポジトリを見る",
                        url: "https://github.com/RusKRusK/TUI-fluid-simulation",
                    },
                ],
                media: [
                    { type: "video", src: "./movies/fluid1.mp4" },
                ],
            },
        ],
    },
    {
        categoryTitle: "ゲーム制作",
        categoryDescription:
            `過去のゲーム制作物です。主に2Dのアクションゲームを開発しております。<br>目的に沿ったアセットが見つからない場合は自分でドット絵を描くことで補填しています。<br>開発環境はGameMakerやUnityのほかに、Pyxelといった「ファンタジー・コンソール」の開発環境を使用することもあります。`,
        items: [
            {
                title: "I Wanna Be The Late Bloomer",
                description: `高難易度アクションゲーム『I Wanna Be The
                Guy』のファンゲームとして制作した、オリジナルの「アイワナ」派生作品です。<br>本作は、GameMakerを用いて開発しています。<br>針の配置やトラップ、ステージギミックなど、プレイヤーの試行錯誤と成長を引き出すような、シンプルかつ高難易度なアクションゲームを設計しました。`,
                links: [],
                media: [
                    {
                        type: "image",
                        src: "./images/iwanna1.png",
                        alt: "スクリーンショット1",
                    },
                    {
                        type: "image",
                        src: "./images/iwanna2.png",
                        alt: "スクリーンショット2",
                    },
                    {
                        type: "image",
                        src: "./images/iwanna3.png",
                        alt: "スクリーンショット3",
                    },
                ],
            },
            {
                title: "Unity",
                description:
                    `Unityのチュートリアルに沿って制作した2Dアクションゲームです。画面上のさくらんぼを回収するようにプレイヤーを操作します。<br>通常のジャンプの他に、2段ジャンプや壁キックの機能も搭載しており、ジャンプボタンを押下する長さに応じてジャンプの高さを調整することができます。<br>より直感的な操作ができることを目指して制作しました。`,
                links: [],
                media: [
                    { type: "video", src: "./movies/unity1.mp4" },
                ],
            },
        ],
    },
    {
        categoryTitle: "その他",
        categoryDescription: "その他の制作物やアカウントです。",
        items: [
            {
                title: "dotpict",
                description:
                    `ドット絵の作品を投稿しているアカウントです。<br>制作したドット絵は、学校の数学自習会のポスターや、友人と出店したサークルの技術書の表紙に使用されました。`,
                links: [
                    {
                        text: "→ dotpictのアカウント",
                        url: "https://dotpict.net/users/1310364",
                    },
                ],
                media: [
                    {
                        type: "image",
                        src: "./images/ilust1.png",
                        alt: "スクリーンショット1",
                    },
                ],
            },
            {
                title: "コミックマーケット",
                description:
                    `コミックマーケット105に、サークル『MUHO』として友人と出店しました。<br>友人の執筆した本の表紙を担当した他、「Toki
                Pona」という人工言語の文法を解説する文法書を執筆いたしました。`,
                links: [
                    {
                        text: "→ 執筆した本(電子版の販売ページに飛びます。)",
                        url: "https://muho.booth.pm/items/6408098",
                    },
                ],
                media: [
                    {
                        type: "image",
                        src: "./images/book1.png",
                        alt: "スクリーンショット1",
                    },
                ],
            },
            {
                title: "Mathlog",
                description:
                    `数学系の記事を投稿しているアカウントです。<br>「ライツアウト」という有名なパズルについての数学的な考察など、より高度な内容の数学記事を投稿しております。`,
                links: [
                    {
                        text: "→ Mathlogのアカウント",
                        url: "https://mathlog.info/users/2154",
                    },
                ],
                media: [],
            },
            {
                title: "きょうの数学",
                description:
                    `京都府高等学校数学研究会が発行しているフリーペーパー『きょうの数学』に記事を寄稿いたしました。`,
                links: [
                    {
                        text: "→ 記事を見る",
                        url: "https://kyotomath.wordpress.com/wp-content/uploads/2023/05/kyomath202303.pdf",
                    },
                ],
                media: [],
            },
        ],
    },
];
