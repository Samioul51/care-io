"use client"

import TextType from '@/Components/TextType';
import React from 'react';
import Review from '../Review/Review';
import styled from "styled-components";


const reviews = [
    {
        id: "1",
        name: "Farida Rahman",
        rev: "CARE.IO made finding a trustworthy babysitter so easy. The caregiver was professional and my kids loved her!"
    },
    {
        id: "2",
        name: "Kamal Hossain",
        rev: "Excellent service for my elderly parents. The caregiver is punctual, caring, and very professional."
    },
    {
        id: "3",
        name: "Nusrat Jahan",
        rev: "Booking was seamless and the care quality exceeded my expectations. Highly recommended!"
    }
];


const Testimonials = () => {
    return (
        <div className='w-full max-w-[1440px] mb-[100px] mx-auto'>
            <div className='text-black text-3xl lg:text-[40px] font-bold text-center mb-10'>
                <TextType
                    text={"Testimonials"}
                    typingSpeed={100}
                    pauseDuration={1500}
                    showCursor={false}
                    startOnVisible={true}
                    deletingSpeed={0}
                    loop={false}
                />
            </div>
            <StyledWrapper
                style={{
                    '--width': '400px',
                    '--height': '200px',
                    '--quantity': reviews.length
                }}
            >
                <div className="slider">
                    <div className="list">
                        {reviews.map((review, index) => (
                            <div
                                key={review.id}
                                className="item"
                                style={{ '--position': index + 1 }}
                            >
                                <Review review={review} />
                            </div>
                        ))}
                    </div>
                </div>
            </StyledWrapper>
        
        </div >
    );
};

const StyledWrapper = styled.div`
  .slider {
    width: 100%;
    height: var(--height);
    overflow: hidden;
    mask-image: linear-gradient(to right, transparent, #000 10% 90%, transparent);
  }

  .slider .list {
    display: flex;
    width: 100%;
    min-width: calc(var(--width) * var(--quantity));
    position: relative;
  }

  .slider .list .item {
    width: var(--width);
    height: var(--height);
    position: absolute;
    left: 100%;
    animation: autoRun 20s linear infinite;
    transition: filter 0.5s;
    animation-delay: calc((20s / var(--quantity)) * (var(--position) - 1) - 10s) !important;
  }

  @keyframes autoRun {
    from {
      left: 100%;
    }
    to {
      left: calc(var(--width) * -1);
    }
  }

  .slider:hover .item {
    animation-play-state: paused !important;
    filter: grayscale(1);
  }

  .slider .item:hover {
    filter: grayscale(0);
  }

  .slider[reverse="true"] .item {
    animation: reversePlay 10s linear infinite;
  }

  @keyframes reversePlay {
    from {
      left: calc(var(--width) * -1);
    }
    to {
      left: 100%;
    }
  }
`;

export default Testimonials;