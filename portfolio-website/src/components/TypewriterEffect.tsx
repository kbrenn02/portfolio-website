'use client';

import React from 'react';
import Typerwriter from 'typewriter-effect';
import { H1 } from './ui/H1';

const TypewriterEffect = () => {
  return (
    <div>
        <H1 className="text-center sm:text-start">
          <Typerwriter
            options={{
                strings: ["Hi, I'm Kevin 👋", "I'm a full-stack software engineer", "Explore my website and enjoy!"],
                autoStart: true,
                loop: true,
            }}
            />
        </H1>
    </div>
  )
}

export default TypewriterEffect