/*
 * @Author: zhangping
 * @Date: 2025-05-11
 * @Description: figmaDemo - Feed Page
 */

import React from 'react';
import styles from './index.module.less';

const Index = () => {
    const categories = [
        {
            id: 1,
            title: 'Title',
            image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=fresh%20fruits%20icon%20minimal%20style&image_size=square',
        },
        {
            id: 2,
            title: 'Title',
            image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=vegetables%20icon%20minimal%20style&image_size=square',
        },
        {
            id: 3,
            title: 'Title',
            image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=bread%20bakery%20icon%20minimal%20style&image_size=square',
        },
        {
            id: 4,
            title: 'Title',
            image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=dairy%20products%20icon%20minimal%20style&image_size=square',
        },
    ];

    const posts = [
        {
            id: 1,
            name: 'Helena',
            group: 'in Group name',
            time: '3 min ago',
            description: 'Post description',
            image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=beautiful%20nature%20landscape%20scenery%20minimal%20style&image_size=landscape_4_3',
            likes: '21 likes',
            comments: '4 comments',
            avatar: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=woman%20portrait%20avatar%20minimal%20style&image_size=square',
        },
        {
            id: 2,
            name: 'Daniel',
            group: 'in Group Name',
            time: '2 hrs ago',
            description:
                'Body text for a post. Since it’s a social app, sometimes it’s a hot take, and sometimes it’s a question.',
            image: null,
            likes: '6 likes',
            comments: '18 comments',
            avatar: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=man%20portrait%20avatar%20minimal%20style&image_size=square',
        },
        {
            id: 3,
            name: 'Oscar',
            group: 'in Group Name',
            time: '1 day ago',
            description: 'Another post',
            image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=city%20building%20architecture%20minimal%20style&image_size=landscape_4_3',
            likes: '58 likes',
            comments: '5 comments',
            avatar: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=man%20portrait%20avatar%20minimal%20style%20glasses&image_size=square',
        },
    ];

    return (
        <div className={styles['feed-page']}>
            {/* Category Section */}
            <div className={styles['feed-category-section']}>
                <div className={styles['feed-category-header']}>
                    <span className={styles['feed-category-title']}>Title</span>
                    <div className={styles['feed-category-chevron']}>
                        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.5 5l5 5-5 5"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </div>
                <div className={styles['feed-category-carousel']}>
                    {categories.map((category) => (
                        <div key={category.id} className={styles['feed-category-item']}>
                            <div className={styles['feed-category-item-image']}>
                                <img src={category.image} alt={category.title} />
                            </div>
                            <span className={styles['feed-category-item-title']}>{category.title}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Posts Section */}
            {posts.map((post) => (
                <div key={post.id} className={styles['feed-post']}>
                    <div className={styles['feed-post-avatar']}>
                        <img src={post.avatar} alt={post.name} />
                    </div>
                    <div className={styles['feed-post-content']}>
                        <div className={styles['feed-post-header']}>
                            <div className={styles['feed-post-meta']}>
                                <div className={styles['feed-post-name-group']}>
                                    <span className={styles['feed-post-name']}>{post.name}</span>
                                    <span className={styles['feed-post-group']}>{post.group}</span>
                                </div>
                                <span className={styles['feed-post-time']}>{post.time}</span>
                            </div>
                            <div className={styles['feed-post-more']}>
                                <svg viewBox="0 0 15 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" />
                                    <circle cx="7.5" cy="1.5" r="1.5" fill="currentColor" />
                                    <circle cx="13.5" cy="1.5" r="1.5" fill="currentColor" />
                                </svg>
                            </div>
                        </div>
                        {post.image && (
                            <div className={styles['feed-post-image']}>
                                <img src={post.image} alt="Post" />
                            </div>
                        )}
                        <div className={styles['feed-post-desc-actions']}>
                            <p className={styles['feed-post-description']}>{post.description}</p>
                            <div className={styles['feed-post-actions']}>
                                <div className={styles['feed-post-action']}>
                                    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M12.627 13.614c-.445 1.502-2.132 1.502-2.577 0C7.692 9.538 2.983 9.538 2.983 9.538c-.546 0-.989.443-.989.989s.443.989.989.989c0 0 3.997 0 5.274 2.861.204.64.941.64 1.145 0C13.003 11.516 17.001 11.516 17.001 11.516c.546 0 .989-.443.989-.989s-.443-.989-.989-.989c0 0-4.709 0-7.044 4.076z"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <span className={styles['feed-post-action-text']}>{post.likes}</span>
                                </div>
                                <div className={styles['feed-post-action']}>
                                    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <span className={styles['feed-post-action-text']}>{post.comments}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Index;

