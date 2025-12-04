import React, { useState } from 'react';
import BlogCard from './BlogCard';

const BlogGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const blogPosts = [
    {
      id: 1,
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/96a013e034144ac24fa9a04307b5bafe45ab3e65?width=1216',
      title: 'Lorem ipsum dolor sit amet consectetur.',
      excerpt: 'Lorem ipsum dolor sit amet consectetur. Purus semper scelerisque libero tellus porttitor tellus sed nulla. Bibendum arcu eu eros massa neque pharetra. Condimentum risus id facilisis facilisis arcu diam. Ultrices lacus quisque posuere egestas blandit. Semper bibendum gravida mauris mattis. Sodales hac tellus eget posuere ut nulla.',
    },
    {
      id: 2,
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/a3cf8240d63669198c5a471830d5210856ad6452?width=584',
      title: 'Lorem ipsum dolor sit amet consectetur.',
      excerpt: 'Lorem ipsum dolor sit amet consectetur. Purus semper scelerisque libero tellus porttitor tellus sed nulla. Bibendum arcu eu eros massa neque pharetra. Condimentum risus id facilisis facilisis arcu diam. Ultrices lacus quisque posuere egestas blandit. Semper bibendum gravida mauris mattis. Sodales hac tellus eget posuere ut nulla.',
    },
    {
      id: 3,
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/577bb74ec41fda7308701ae5cc87519aae22ed36?width=584',
      title: 'Lorem ipsum dolor sit amet consectetur.',
      excerpt: 'Lorem ipsum dolor sit amet consectetur. Purus semper scelerisque libero tellus porttitor tellus sed nulla. Bibendum arcu eu eros massa neque pharetra. Condimentum risus id facilisis facilisis arcu diam. Ultrices lacus quisque posuere egestas blandit. Semper bibendum gravida mauris mattis. Sodales hac tellus eget posuere ut nulla.',
    },
    {
      id: 4,
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/832ac7093460ff74fea3831631e090cf6f94b980?width=588',
      title: 'Lorem ipsum dolor sit amet consectetur.',
      excerpt: 'Lorem ipsum dolor sit amet consectetur. Purus semper scelerisque libero tellus porttitor tellus sed nulla. Bibendum arcu eu eros massa neque pharetra. Condimentum risus id facilisis facilisis arcu diam. Ultrices lacus quisque posuere egestas blandit. Semper bibendum gravida mauris mattis. Sodales hac tellus eget posuere ut nulla.',
    },
    {
      id: 5,
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/acb26b8b97e47e2733b471c3d0df3fb9a9763a20?width=588',
      title: 'Lorem ipsum dolor sit amet consectetur.',
      excerpt: 'Lorem ipsum dolor sit amet consectetur. Purus semper scelerisque libero tellus porttitor tellus sed nulla. Bibendum arcu eu eros massa neque pharetra. Condimentum risus id facilisis facilisis arcu diam. Ultrices lacus quisque posuere egestas blandit. Semper bibendum gravida mauris mattis. Sodales hac tellus eget posuere ut nulla.',
    },
    {
      id: 6,
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/88fdf09aa5fbab06f7c5a0ba30c00bddf8e61130?width=588',
      title: 'Lorem ipsum dolor sit amet consectetur.',
      excerpt: 'Lorem ipsum dolor sit amet consectetur. Purus semper scelerisque libero tellus porttitor tellus sed nulla. Bibendum arcu eu eros massa neque pharetra. Condimentum risus id facilisis facilisis arcu diam. Ultrices lacus quisque posuere egestas blandit. Semper bibendum gravida mauris mattis. Sodales hac tellus eget posuere ut nulla.',
    },
    {
      id: 7,
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/19df86b331f08c253fdd15d93cce286f190a47e5?width=588',
      title: 'Lorem ipsum dolor sit amet consectetur.',
      excerpt: 'Lorem ipsum dolor sit amet consectetur. Purus semper scelerisque libero tellus porttitor tellus sed nulla. Bibendum arcu eu eros massa neque pharetra. Condimentum risus id facilisis facilisis arcu diam. Ultrices lacus quisque posuere egestas blandit. Semper bibendum gravida mauris mattis. Sodales hac tellus eget posuere ut nulla.',
    },
  ];

  const totalPages = 10;

  const renderPageNumbers = () => {
    const pages = [];
    
    pages.push(
      <button
        key={1}
        onClick={() => setCurrentPage(1)}
        className={`flex h-8 w-8 items-center justify-center rounded-full ${
          currentPage === 1 
            ? 'bg-primary text-white' 
            : 'text-primary hover:bg-gray-100'
        }`}
      >
        1
      </button>
    );

    if (currentPage > 3) {
      pages.push(
        <button
          key={2}
          onClick={() => setCurrentPage(2)}
          className="flex h-8 w-8 items-center justify-center rounded-lg text-primary hover:bg-gray-100"
        >
          2
        </button>
      );
    }

    pages.push(
      <button
        key={3}
        onClick={() => setCurrentPage(3)}
        className={`flex h-8 w-8 items-center justify-center rounded-lg ${
          currentPage === 3 
            ? 'bg-primary text-white' 
            : 'text-primary hover:bg-gray-100'
        }`}
      >
        3
      </button>
    );

    if (currentPage < totalPages - 2) {
      pages.push(
        <span key="dots" className="flex h-8 w-8 items-center justify-center text-primary">
          ...
        </span>
      );
    }

    pages.push(
      <button
        key={8}
        onClick={() => setCurrentPage(8)}
        className={`flex h-8 w-8 items-center justify-center rounded-lg ${
          currentPage === 8 
            ? 'bg-primary text-white' 
            : 'text-primary hover:bg-gray-100'
        }`}
      >
        8
      </button>
    );

    pages.push(
      <button
        key={9}
        onClick={() => setCurrentPage(9)}
        className={`flex h-8 w-8 items-center justify-center rounded-lg ${
          currentPage === 9 
            ? 'bg-primary text-white' 
            : 'text-primary hover:bg-gray-100'
        }`}
      >
        9
      </button>
    );

    pages.push(
      <button
        key={10}
        onClick={() => setCurrentPage(10)}
        className={`flex h-8 w-8 items-center justify-center rounded-lg ${
          currentPage === 10 
            ? 'bg-primary text-white' 
            : 'text-primary hover:bg-gray-100'
        }`}
      >
        10
      </button>
    );

    return pages;
  };

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1240px] px-5 py-25 md:px-10 lg:px-5">
        <div className="flex flex-col gap-10">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="lg:col-span-1">
              <BlogCard
                image={blogPosts[0].image}
                title={blogPosts[0].title}
                excerpt={blogPosts[0].excerpt}
                variant="default"
              />
            </div>

            <div className="flex flex-col gap-4 lg:col-span-1">
              <BlogCard
                image={blogPosts[1].image}
                title={blogPosts[1].title}
                excerpt={blogPosts[1].excerpt}
                variant="horizontal"
              />
              <BlogCard
                image={blogPosts[2].image}
                title={blogPosts[2].title}
                excerpt={blogPosts[2].excerpt}
                variant="horizontal"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <BlogCard
              image={blogPosts[3].image}
              title={blogPosts[3].title}
              excerpt={blogPosts[3].excerpt}
              variant="horizontal"
            />
            <BlogCard
              image={blogPosts[4].image}
              title={blogPosts[4].title}
              excerpt={blogPosts[4].excerpt}
              variant="horizontal"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <BlogCard
              image={blogPosts[5].image}
              title={blogPosts[5].title}
              excerpt={blogPosts[5].excerpt}
              variant="horizontal"
            />
            <BlogCard
              image={blogPosts[6].image}
              title={blogPosts[6].title}
              excerpt={blogPosts[6].excerpt}
              variant="horizontal"
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="font-poppins text-base leading-[26px] text-primary hover:underline disabled:cursor-not-allowed disabled:opacity-50"
            >
              Previous
            </button>

            <div className="flex items-center gap-0.5">
              {renderPageNumbers()}
            </div>

            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="flex items-center gap-2 font-poppins text-base leading-[26px] text-primary hover:underline disabled:cursor-not-allowed disabled:opacity-50"
            >
              <span>Next</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.16602 10H15.8327M15.8327 10L9.99935 4.16669M15.8327 10L9.99935 15.8334" stroke="#85053B" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
