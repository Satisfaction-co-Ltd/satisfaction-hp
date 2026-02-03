'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { blogPosts } from '@/data/blogPosts'

const BlogGridPost: React.FC = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <>
      <div className='blog-area ptb-100'>
        <div className='container'>
          <div className='row justify-content-center'>
            {currentPosts.map((post) => (
              <div className='col-lg-4 col-md-6' key={post.id}>
                <div className='single-blog-post'>
                  <div className='image'>
                    <Link href={`/blog/${post.link}`} className='d-block'>
                      <Image
                        src={post.image}
                        alt='blog'
                        width={865}
                        height={645}
                      />
                    </Link>
                  </div>
                  <div className='content'>
                    <ul className='meta'>
                      <li>
                        <i className='ri-time-line'></i> {post.date}
                      </li>
                      {/* <li>
                        <i className='ri-message-2-line'></i>
                        <Link href={post.link}>({post.comments}) Comment</Link>
                      </li> */}
                    </ul>
                    <h3>
                      <Link href={post.link}>{post.title}</Link>
                    </h3>
                  </div>
                </div>
              </div>
            ))}

            <div className='col-lg-12 col-md-12'>
              <div className='pagination-area'>
                <div className='nav-links'>
                  {pageNumbers.map((number) => (
                    <button
                      key={number}
                      onClick={() => {
                        setCurrentPage(number);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className={`page-numbers ${currentPage === number ? 'current' : ''}`}
                      style={{ border: 'none', background: 'none' }}
                    >
                      {number}
                    </button>
                  ))}

                  {currentPage < totalPages && (
                    <button 
                      className='next page-numbers'
                      onClick={() => setCurrentPage(currentPage + 1)}
                    >
                      <i className='ri-arrow-right-line'></i>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogGridPost
