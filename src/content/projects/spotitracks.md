---
id: spotitracks
title: SpotiTracks: Spotify Playlist Manager & Track Analytics
subtitle: Sleek web application for Spotify playlist creation, multi-playlist merging, and listener track metrics.
date: 2026-06
category: Music & Media API Application
role: Senior Frontend Developer
techStack:
  - React
  - Spotify Web API
  - TypeScript
  - Tailwind CSS
  - OAuth 2.0 PKCE
thumbnail: /screenshots/spotitracks/playlists.png
screenshots:
  - /screenshots/spotitracks/playlists.png
  - /screenshots/spotitracks/merge-playlist.png
  - /screenshots/spotitracks/top-tracks.png
  - /screenshots/spotitracks/top-tracks-mobile.png
  - /screenshots/spotitracks/playlist-mobile.png
  - /screenshots/spotitracks/merge-playlist-mobile.png
featured: true
highlights:
  - Multi-Playlist Merging & Deduplication
  - Spotify OAuth 2.0 Authentication (PKCE Flow)
  - Listener Top Tracks & Artist Analytics
  - Mobile-First Audio Player Interface
---

## Overview

**SpotiTracks** is a feature-rich web application built for music enthusiasts and playlist curators. Utilizing the **Spotify Web API**, SpotiTracks enables users to organize, analyze, and combine their Spotify music library with ease.

Built with **React**, **TypeScript**, and **Tailwind CSS**, it features a sleek music dashboard dark theme inspired by premium audio applications.

---

## Key Features

1. **Playlist Merger Utility**: Combine multiple playlists into a unified collection with automated duplicate track removal.
2. **Top Tracks Analytics**: View personalized listening metrics across short-term, medium-term, and long-term time ranges.
3. **Playlist Browser & Track Management**: Seamlessly manage track ordering, inspect album artwork, and export custom playlists directly to Spotify.
4. **Responsive Mobile Interface**: Optimized playlist control views tailored for mobile smartphones and tablets.

---

## Technical Highlights & Architecture

- **OAuth 2.0 PKCE Flow**: Secure client-side authentication with Spotify without requiring backend token exposure.
- **Optimistic State Updates**: Instant UI feedback during playlist track additions/deletions before API confirmation.
- **Design & UX**: Audio waveform accents, high-contrast dark theme.
