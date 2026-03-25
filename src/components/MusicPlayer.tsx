"use client";

import { useState, useRef, useEffect } from 'react';
import basePath from '@/lib/basePath';

const PLAYLIST = [
  { title: 'ดาวค้างฟ้า', src: `${basePath}/music/ดาวคางฟา.mp3` },
  { title: 'Now Or Never', src: `${basePath}/music/bgm.mp3` },
  { title: 'ซ้ำรอย', src: `${basePath}/music/ซำรอย.mp3` },
  { title: 'Cinnamon Girl', src: `${basePath}/music/Cinnamon Girl.mp3` }
];

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.2);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // Handle switching tracks
  useEffect(() => {
    if (audioRef.current && hasInteracted) {
      if (isPlaying) {
        audioRef.current.play().catch(console.error);
      }
    }
  }, [currentTrackIndex, hasInteracted, isPlaying]);

  const handleEnterSite = () => {
    setHasInteracted(true);
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(console.error);
    }
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(console.error);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const changeTrack = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      setCurrentTrackIndex((prev) => (prev + 1) % PLAYLIST.length);
    } else {
      setCurrentTrackIndex((prev) => (prev === 0 ? PLAYLIST.length - 1 : prev - 1));
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation(); // Avoid triggering overlay click
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const currentTrack = PLAYLIST[currentTrackIndex];

  return (
    <>
      {/* Intro Overlay designed to capture the first interaction for Audio Autoplay */}
      {!hasInteracted && (
        <div className="intro-overlay" onClick={handleEnterSite}>
          <div className="intro-content">
            <h2>Welcome to the Experience</h2>
            <p style={{ color: 'var(--text-secondary)' }}>Click anywhere to enter</p>
            <button className="btn btn-primary" style={{ marginTop: '2rem' }}>Enter Portfolio</button>
          </div>
        </div>
      )}

      <div className={`music-player ${hasInteracted ? 'visible' : 'hidden'}`} style={{ gap: '1.2rem' }}>
        <audio ref={audioRef} loop src={currentTrack.src} />

        <div className="player-controls" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <button onClick={() => changeTrack('prev')} aria-label="Previous Track" style={{ background: 'transparent', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', padding: '0.3rem', opacity: 0.6, transition: 'all 0.2s', outline: 'none' }} onMouseOver={e => e.currentTarget.style.opacity = '1'} onMouseOut={e => e.currentTarget.style.opacity = '0.6'}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
            </svg>
          </button>

          <button className="play-btn" onClick={togglePlay} aria-label="Play/Pause Music">
            {isPlaying ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>

          <button onClick={() => changeTrack('next')} aria-label="Next Track" style={{ background: 'transparent', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', padding: '0.3rem', opacity: 0.6, transition: 'all 0.2s', outline: 'none' }} onMouseOver={e => e.currentTarget.style.opacity = '1'} onMouseOut={e => e.currentTarget.style.opacity = '0.6'}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
            </svg>
          </button>
        </div>

        <div className="track-info" style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', minWidth: '110px' }}>
          <span className="track-name" style={{ fontSize: '0.95rem', fontWeight: 600, maxWidth: '140px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{currentTrack.title}</span>
          <div className="volume-control">
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="volume-slider"
              title="Adjust volume"
            />
          </div>
        </div>
      </div>
    </>
  );
}
