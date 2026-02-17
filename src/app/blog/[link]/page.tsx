'use client'

import React from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { blogPosts } from '@/data/blogPosts'
import NavBar from '@/components/NavBar'
import PageBanner from '@/components/PageBanner'

const BlogDetails = () => {
  const params = useParams();
  // URLの[link]部分と、データのlinkが一致するものを探す
  const post = blogPosts.find((item) => item.link === params.link);

  // 記事が見つからない場合
  if (!post) {
    return <div className="container ptb-100">記事が見つかりませんでした。</div>;
  }

  return (
    <>
      <PageBanner
        pageTitle='Blog Page'
        homePageUrl='/'
        homePageText='Top'
        activePageText='ブログ'
      />

      <NavBar />

      <div className='blog-details-area ptb-100'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8 col-md-12'>
              <div className='blog-details-desc'>
                {/* アイキャッチ画像 */}
                <div className='article-image'>
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    width={865} 
                    height={645} 
                    className="rounded-3"
                  />
                </div>

                {/* 記事タイトルとメタ情報 */}
                <div className='article-content'>
                  <ul className='entry-meta'>
                    <li>
                      <i className='ri-time-line'></i> {post.date}
                    </li>
                  </ul>

                  <h2>{post.title}</h2>

                  {/* ★ 本文のレンダリング（HTMLタグを有効化） */}
                  <div 
                    className='entry-main-content mt-4'
                    dangerouslySetInnerHTML={{ __html: post.content }} 
                  />
                </div>

                {/* 記事下のタグやSNS共有（必要に応じて） */}
                <div className='article-footer'>
                  <div className='article-tags'>
                    {/* <span><i className='ri-price-tag-3-line'></i> Tags:</span> */}
                  </div>
                </div>
              </div>
            </div>

            {/* サイドバー（必要ならここに配置） */}
            {/* <div className='col-lg-4 col-md-12'>
            </div> */}
          </div>
        </div>

        <style jsx>{`
          .entry-main-content :global(h3) {
            font-size: 24px;
            margin-top: 30px;
            border-left: 4px solid #007aff;
            padding-left: 15px;
          }
          .entry-main-content :global(p) {
            line-height: 1.8;
            margin-bottom: 20px;
            color: #444;
          }
          .entry-main-content :global(ul) {
            margin-bottom: 20px;
          }
        `}</style>
      </div>
    </>
  )
}

export default BlogDetails