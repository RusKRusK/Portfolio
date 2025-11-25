const projects = [
    {
        categoryTitle: "Deno",
        categoryDescription: "Deno, Deno Deploy, Deno KVなどを使用した作品です。<br>主にTypeScriptを使用しています。",
        items: [
            {
                title: "ブログ",
                description: `このブログは、<strong>Deno</strong>と<strong>TypeScript</strong>を用いて、サーバーサイドのロジックからフロントエンドの表示まで一貫して構築したWebアプリケーションです。フレームワークに依存せず、Denoの標準機能を最大限に活用しているのが特徴で、特にデータベースには<strong>Deno KV</strong>を採用し、訪問者カウンターやBBS（掲示板）といった動的コンテンツを実現しました。<br>記事はMarkdownで管理し、サーバー側でHTMLに動的変換して配信しています。また、BBSのリアルタイム更新は、WebSocketの代わりにポーリングという手法を用いることで、実装の複雑さを抑えつつ実用的な機能を確保しました。<br>開発プロセスは、<strong>Deno Deploy</strong>との連携により、GitHubへのプッシュをトリガーとしたCI/CD（継続的インテグレーション/継続的デリバリー）を構築し、開発から公開までを自動化しています。SEO対策として、各ページに応じたOGPメタタグを動的に生成する機能も実装済みです。このプロジェクトは、Denoのポテンシャルを活かし、モダンなWeb開発技術を実践した成果物です。`,
                links: [
                    { text: "→ ブログサイトを見る", url: "https://ruskrusk-blog-67.deno.dev/" }
                ],
                media: [
                    { type: "image", src: "./images/blog1.png", alt: "スクリーンショット1" },
                    { type: "image", src: "https://ruskrusk.github.io/BlogResources/images/010bbs.png", alt: "スクリーンショット2" }
                ]
            }
        ]
    },
    {
        categoryTitle: "Gemini API",
        categoryDescription: "Googleの提供するLLM(大規模言語モデル)である、GeminiのAPIを用いた作品です。",
        items: [
            {
                title: "Discord Bot",
                description: `Discordサーバー内でのコミュニケーションを支援する多機能Botです。<br>
                友人とのDiscordサーバーでの運用を想定して開発されており、「モザイク機能」では、NSFWな画像に対して一定数のリアクションが付くと、自動で画像をモザイク処理し、元画像を専用スレッドへ非通知で複製、元のメッセージを削除します。<br>
                「Starboard機能」では、特定のリアクション数を超えたメッセージを専用チャンネルへ自動転送し、注目メッセージを一覧できるようにしました。閾値やモザイク強度は管理者向けのスラッシュコマンドで柔軟に設定可能です。<br>さらに、Gemini
                APIを活用した画像説明機能も備えております、ただし、Geminiの利用規約では、NSFWなコンテンツの取り扱いを禁止しています。そのため、ユーザーがアップロードした画像をGeminiに送信する前に、nsfwjsというtensorflowのモデルを使用することで、画像が適切かどうかを判定して、不適切な画像を自動的にはじくようにしました。NSFW対策やAIとの連携、ユーザー権限管理など、実際の運用を想定した設計を重視しました。`,
                links: [
                    { text: "→ リポジトリを見る", url: "https://github.com/RusKRusK/RusKMon" }
                ],
                media: [
                    { type: "image", src: "./images/discordbot1.png", alt: "スクリーンショット1" },
                    { type: "image", src: "./images/discordbot2.png", alt: "スクリーンショット2" }
                ]
            },
            {
                title: "Gemini チャットアプリ",
                description: `このデスクトップ向け多機能チャットアプリケーションは、<strong>Google Gemini API (gemini-2.0-flash)</strong>
                を活用し、ユーザーとAIの円滑な対話を可能にします。GUIフレームワークには<strong>PyQt5を採用</strong>しており、直感的で洗練された操作性を提供します。また、現代のユーザーの好みに合わせ、<strong>ダークテーマにも対応</strong>しました。
                
                <h3>主な特徴</h3>
                <ul>
                    <li><strong>直感的でモダンなGUI</strong>:
                        PyQt5によるデスクトップアプリケーションとして設計されており、スムーズで視覚的に魅力的なインターフェースを実現しています。ユーザーはストレスなくAIとの会話を楽しめます。</li>
                    <li><strong>マルチモーダルな対話</strong>: Gemini
                        APIの強力な特性を最大限に活かし、<strong>画像、動画、音声、PDF</strong>といった多様なメディア形式に対応しています。ファイルの送信は、通常のファイル選択に加え、<strong>ドラッグ＆ドロップ</strong>でも簡単に行えます。
                    </li>
                    <li><strong>柔軟なシステムインタラクション</strong>:
                        ユーザーは任意の「<strong>システムインタラクション</strong>」を設定できます。これにより、AIに特定のキャラクターを演じさせたり、特定の専門分野に特化させたりと、ニーズに合わせたパーソナライズされた対話が可能です。
                    </li>
                    <li><strong>マークダウン表示への対応</strong>:
                        Geminiからの返答がマークダウン形式で表示されるため、コードブロックや箇条書きなども適切に整形され、<strong>高い可読性</strong>でチャット内容を確認できます。</li>
                    <li><strong>会話履歴の保存・復元</strong>:
                        会話履歴は<strong>JSON形式で保存・復元</strong>できるため、過去の対話を継続したり、必要な情報を再利用したりすることが容易です。これにより、実用性と利便性が大幅に向上しています。
                    </li>
                </ul>
                <h3>UIの強化とユーザビリティの向上</h3>
                <p>
                    従来のバージョンからUIを大幅に改善しました。開発当初はTkinterを利用していましたが、PyQt5への移行により、より表現力豊かなUIコンポーネントを活用できるようになりました。また、<strong>ダークテーマに対応</strong>したり、メッセージ本文やシステムインタラクションの<strong>複数行入力</strong>により、長文のもスムーズに入力できるようにしたりしたことで、全体的なユーザビリティが向上しています。
                </p>
                <p>
                    このアプリケーションは、ドキュメントの要約から画像や音声を含むマルチモーダルなやり取りまで、日常的な幅広い利用シーンを想定して開発されました。
                </p>`,
                links: [
                    { text: "→ リポジトリを見る", url: "https://github.com/RusKRusK/GeminiChatApp" }
                ],
                media: [
                    { type: "image", src: "./images/gemini1.png", alt: "スクリーンショット1" },
                    { type: "image", src: "./images/gemini2.png", alt: "スクリーンショット2" },
                    { type: "image", src: "./images/gemini3.png", alt: "スクリーンショット3" },
                    { type: "image", src: "./images/gemini4.png", alt: "スクリーンショット4" }
                ]
            }
        ]
    },
    {
        categoryTitle: "CUIシリーズ",
        categoryDescription: `CUI（Character User
            Interface）環境における表現力の限界に挑んだ作品です。<br>本シリーズでは、ANSIエスケープシーケンスによる文字色の変更やカーソル制御といった低レイヤ機能を駆使し、3D迷路やグラフ描画、ペイントソフトなど、GUIに匹敵する視覚体験をターミナル上で実現しています。<br>限られた手段の中でいかにインタラクティブ性や視認性を高めるか、アルゴリズムとデザインの両面から試行錯誤を重ねました。<br>CやC++で記述されたプログラムは、Raspberry
            Piなどの比較的低スペックな環境でも動作可能なことを目指し、標準出力によってグラフィックを表現しています。<br>当初は趣味としてペイントソフトやグラフ描画ツールの開発を行っていましたが、やがて学園祭のクラス展示『白黒世界からの脱出』のギミックの一つとして、3D迷路が採用されるに至りました。`,
        items: [
            {
                title: "CUI 3D迷路",
                description: `Linuxのターミナル上で動作する、完全テキストベースの3D風迷路ゲームです。<br>学園祭のクラス展示企画「白黒世界からの脱出」に合わせて制作した作品です。<br>配色はモノクロに統一し、テーマに沿った世界観を構築しました。<br>迷路をクリアすると、宝箱が開き「パレットを手に入れた」という演出がアスキーアートのアニメーションで表示されます。<br>本作は、ANSIのエスケープシーケンスによる文字色の変更とカーソル位置の指定を使用しています。<br>これによって、CUI環境でも疑似的な3D表現を実現しています。<br>いわゆる『DOOM』のような、前後移動と左右の視点回転が可能です。`,
                links: [
                    { text: "→ リポジトリを見る", url: "https://github.com/RusKRusK/CUI-maze" }
                ],
                media: [
                    { type: "video", src: "./movies/cuimaze.mp4" },
                    { type: "image", src: "./images/cuimaze1.png", alt: "スクリーンショット1" },
                    { type: "image", src: "./images/cuimaze2.png", alt: "スクリーンショット2" }
                ]
            },
            {
                title: "CUI グラフ描画ツール",
                description: `Linuxのターミナル上で動作する、完全テキストベースのグラフ描画ツールです。<br>ANSIのエスケープシーケンスを用いた文字色の変更により、複数のグラフの描画を可能にしています。<br>グラフは、曲線の太さが常に一定になるように描画します。単にy座標だけを引き伸ばすと、曲線の傾きによってグラフの太さが変わってきてしまいます。<br>そこで本作品では、微分や三角関数などの数学的な操作を用いることで、グラフの傾きによらず、一定の太さでグラフを描画する処理を実現しました。`,
                links: [
                    { text: "→ リポジトリを見る", url: "https://github.com/RusKRusK/CUI-graph" }
                ],
                media: [
                    { type: "image", src: "./images/cuigraph1.png", alt: "スクリーンショット1" }
                ]
            },
            {
                title: "CUI ペイントソフト",
                description: `Linuxのターミナル上で動作する、完全テキストベースのペイントツールです。<br>ANSIのエスケープシーケンスにを用いた文字色と背景色の変更により、空白文字に色を付けた、ドット絵のような表現が可能です。<br>作成したイラストは、他のCUIソフトウェアに流用できるように、「printf関数」や「二次元配列」としてエクスポートできます。2枚目の画像は、制作したイラストを色番号の二次元配列として出力している様子です。<br>他にも、イラストのセーブとロードや左右反転など、自身にとってより使いやすいドット絵制作ソフトを追求しました。`,
                links: [
                    { text: "→ リポジトリを見る", url: "https://github.com/RusKRusK/CUI-paint" }
                ],
                media: [
                    { type: "image", src: "./images/cuipaint1.png", alt: "スクリーンショット1" },
                    { type: "image", src: "./images/cuipaint2.png", alt: "スクリーンショット2" }
                ]
            },
            {
                title: "CUI イラスト3D表示",
                description: `Linuxのターミナル上で動作する、完全テキストベースで疑似的に3D表示をするプログラムです。<br>CUI
                ペイントソフトで作成したイラストの上を飛び回るように見ることができ、作成したイラストを別の視点で体験できます。<br>単純な線形変換ではなく、三角関数などの数学的操作と座標計算によって、奥行きを感じられるような3D表示を実現しています。`,
                links: [
                    { text: "→ リポジトリを見る", url: "https://github.com/RusKRusK/CUI-3D" }
                ],
                media: [
                    { type: "video", src: "./movies/cui3d.mp4" },
                    { type: "image", src: "./images/cui3d.png", alt: "スクリーンショット1" }
                ]
            }
        ]
    },
    {
        categoryTitle: "ゲーム制作",
        categoryDescription: `過去のゲーム制作物です。主に2Dのアクションゲームを開発しております。<br>目的に沿ったアセットが見つからない場合は自分でドット絵を描くことで補填しています。<br>開発環境はGameMakerやUnityのほかに、Pyxelといった「ファンタジー・コンソール」の開発環境を使用することもあります。`,
        items: [
            {
                title: "I Wanna Be The Late Bloomer",
                description: `高難易度アクションゲーム『I Wanna Be The
                Guy』のファンゲームとして制作した、オリジナルの「アイワナ」派生作品です。<br>本作は、GameMakerを用いて開発しています。<br>針の配置やトラップ、ステージギミックなど、プレイヤーの試行錯誤と成長を引き出すような、シンプルかつ高難易度なアクションゲームを設計しました。`,
                links: [],
                media: [
                    { type: "image", src: "./images/iwanna1.png", alt: "スクリーンショット1" },
                    { type: "image", src: "./images/iwanna2.png", alt: "スクリーンショット2" },
                    { type: "image", src: "./images/iwanna3.png", alt: "スクリーンショット3" }
                ]
            },
            {
                title: "Unity",
                description: `Unityのチュートリアルに沿って制作した2Dアクションゲームです。画面上のさくらんぼを回収するようにプレイヤーを操作します。<br>通常のジャンプの他に、2段ジャンプや壁キックの機能も搭載しており、ジャンプボタンを押下する長さに応じてジャンプの高さを調整することができます。<br>より直感的な操作ができることを目指して制作しました。`,
                links: [],
                media: [
                    { type: "video", src: "./movies/unity1.mp4" }
                ]
            }
        ]
    },
    {
        categoryTitle: "チーム制作",
        categoryDescription: "チームでの制作物です。",
        items: [
            {
                title: "Treasure on Find",
                description: `「スタンプラリー×クイズ」で学校・企業見学をサポートする、スマホ向けWebサイトです。<br>アプリの企画と、コンパスなどのUIのデザインを担当しました。<br>コンパスやマップを駆使して、現地のQRコードを探します。QRコードを読み取ることでポイント獲得、自動的に始まるクイズに正解するとさらにポイントが獲得できます。これらを繰り返すことで楽しく学校・企業見学をサポートできます。<br>本作品は、2023年度の日タイ高校生ICTフェアに向けた、2つ下の学年の後輩のサポートとして参加し、5人のチームで協力して最後まで開発を行いました。`,
                links: [
                    { text: "→ リポジトリを見る", url: "https://github.com/Wholesome-Student/ToF" },
                    { text: "→ サイトを見る", url: "https://tof.deno.dev/unsupporteddevice.html" }
                ],
                media: [
                    { type: "image", src: "./images/tof1.png", alt: "スクリーンショット1" }
                ]
            }
        ]
    },
    {
        categoryTitle: "その他",
        categoryDescription: "その他の制作物やアカウントです。",
        items: [
            {
                title: "dotpict",
                description: `ドット絵の作品を投稿しているアカウントです。<br>制作したドット絵は、学校の数学自習会のポスターや、友人と出店したサークルの技術書の表紙に使用されました。`,
                links: [
                    { text: "→ dotpictのアカウント", url: "https://dotpict.net/users/1310364" }
                ],
                media: [
                    { type: "image", src: "./images/ilust1.png", alt: "スクリーンショット1" }
                ]
            },
            {
                title: "コミックマーケット",
                description: `コミックマーケット105に、サークル『MUHO』として友人と出店しました。<br>友人の執筆した本の表紙を担当した他、「Toki
                Pona」という人工言語の文法を解説する文法書を執筆いたしました。`,
                links: [
                    { text: "→ 執筆した本(電子版の販売ページに飛びます。)", url: "https://muho.booth.pm/items/6408098" }
                ],
                media: [
                    { type: "image", src: "./images/book1.png", alt: "スクリーンショット1" }
                ]
            },
            {
                title: "Mathlog",
                description: `数学系の記事を投稿しているアカウントです。<br>「ライツアウト」という有名なパズルについての数学的な考察など、より高度な内容の数学記事を投稿しております。`,
                links: [
                    { text: "→ Mathlogのアカウント", url: "https://mathlog.info/users/2154" }
                ],
                media: []
            },
            {
                title: "きょうの数学",
                description: `京都府高等学校数学研究会が発行しているフリーペーパー『きょうの数学』に記事を寄稿いたしました。`,
                links: [
                    { text: "→ 記事を見る", url: "https://kyotomath.wordpress.com/wp-content/uploads/2023/05/kyomath202303.pdf" }
                ],
                media: []
            }
        ]
    }
];
