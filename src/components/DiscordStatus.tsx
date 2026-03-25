"use client";

import React, { useEffect, useState } from 'react';

// === IMPORTANT ===
// Replace this with your actual Discord User ID!
// Make sure you join the Lanyard Discord server (discord.gg/lanyard) or the API won't find you.
const DISCORD_USER_ID = "453188828023357452"; // Phineas (creator of Lanyard) used for default demo

interface LanyardData {
  discord_user: {
    id: string;
    username: string;
    avatar: string;
    display_name: string;
  };
  discord_status: 'online' | 'idle' | 'dnd' | 'offline';
  activities: any[];
}

export default function DiscordStatus() {
  const [data, setData] = useState<LanyardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const res = await fetch(`https://api.lanyard.rest/v1/users/${DISCORD_USER_ID}`);
        const json = await res.json();
        if (json.success) {
          setData(json.data);
        }
      } catch (err) {
        console.error("Failed to fetch Discord status", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStatus();
    // Poll every 10 seconds for real-time updates
    const interval = setInterval(fetchStatus, 10000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="discord-widget skeleton">
        <p>Loading Live Status...</p>
      </div>
    );
  }

  if (!data) return null;

  const { discord_user, discord_status, activities } = data;
  const avatarUrl = `https://cdn.discordapp.com/avatars/${discord_user.id}/${discord_user.avatar}.png?size=128`;

  const statusColors = {
    online: '#43b581',
    idle: '#faa61a',
    dnd: '#f04747',
    offline: '#747f8d'
  };

  const statusColor = statusColors[discord_status] || statusColors.offline;

  // Custom status is type 4, Playing a game is type 0
  const customStatus = activities.find(a => a.type === 4)?.state;
  const playingGame = activities.find(a => a.type === 0)?.name;

  return (
    <div className="discord-widget animate-fade-in">
      <div className="discord-header">
        <div className="discord-avatar-wrapper">
          <img src={avatarUrl} alt={discord_user.display_name} className="discord-avatar" />
          <div className="discord-status-dot" style={{ backgroundColor: statusColor }} title={discord_status} />
        </div>
        <div className="discord-info">
          <div className="discord-name">{discord_user.display_name}</div>
          <div className="discord-username">@{discord_user.username}</div>
        </div>
      </div>

      <div className="discord-activity">
        {customStatus && <div className="discord-custom-status">💬 {customStatus}</div>}
        {playingGame && <div className="discord-playing">🎮 Playing <strong>{playingGame}</strong></div>}
        {!customStatus && !playingGame && (
          <div className="discord-state" style={{ color: statusColor }}>
            Status: {discord_status}
          </div>
        )}
      </div>

      <a
        href={`https://discord.com/users/${discord_user.id}`}
        target="_blank"
        rel="noopener noreferrer"
        className="discord-connect-btn"
      >
        <svg width="20" height="20" viewBox="0 0 127.14 96.36" fill="currentColor">
          <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.31,60,73.31,53s5-12.74,11.43-12.74S96.16,46,96.06,53,91.08,65.69,84.69,65.69Z" />
        </svg>
        Send Friend Request
      </a>
    </div>
  );
}
