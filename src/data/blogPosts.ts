
export interface BlogPost {
  id: number;
  title: string;
  date: string;
  image: string;
  link: string;
  summary: string;
  content: string;
  comments: number;
}

export const blogPosts: BlogPost[] = [
  // ... 新しい投稿を追加する場合はここに追加
  // ... id と link はこの中で一意である必要がある(現状idは重複しても動作上は問題ないがidの意味がなくなるので重複NG)
  // ... note等の外部サービスの内容を表示させることができるようならこれは使わない
  {
    id: 3,
    title: "noteとかの他のブログサイトの内容を表示することはできるか？",
    date: "2026-02-03",
    image: "/images/blog/blog1.jpg",
    link: "blog-2026-02-03-1",
    summary: "",
    content: `
      <p>本文</p>
      <h3>本文</h3>
      <ul>
        <li>本文</li>
        <li>本文</li>
        <li>本文</li>
      </ul>
    `,
    comments: 0
  },
  {
    id: 2,
    title: "会社HP側で更新とかしなくても最新の内容を反映できるか？",
    date: "2026-02-03",
    image: "/images/blog/blog2.jpg",
    link: "blog-2026-02-03-2",
    summary: "",
    content: `
      <p>本文</p>
      <h3>本文</h3>
      <ul>
        <li>本文</li>
        <li>本文</li>
        <li>本文</li>
      </ul>
    `,
    comments: 4
  },
  {
    id: 1,
    title: "できない場合はブログの更新方法を考えないといけない",
    date: "2026-02-03",
    image: "/images/blog/blog2.jpg",
    link: "blog-2026-02-03-3",
    summary: "",
    content: `
      <p>本文</p>
      <h3>本文</h3>
      <ul>
        <li>本文</li>
        <li>本文</li>
        <li>本文</li>
      </ul>
    `,
    comments: 4
  },
];
