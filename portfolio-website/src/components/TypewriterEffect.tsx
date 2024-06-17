'use client';

import React from 'react';
import Typerwriter from 'typewriter-effect';
import { H1 } from './ui/H1';

const TypewriterEffect = () => {
  return (
    <div>
        <H1>
          <Typerwriter
            options={{
                strings: ['Hello', 'World'],
                autoStart: true,
                loop: true,
            }}
            />
        </H1>
    </div>
  )
}

export default TypewriterEffect