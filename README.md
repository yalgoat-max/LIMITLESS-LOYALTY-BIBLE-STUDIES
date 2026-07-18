# Bible Hub

A mobile-first Bible learning and gaming application built with Next.js 15.

## Features

- **Home Page**: Navigation hub with quick access to Trivia and Games
- **Bible Trivia**: Random multiple-choice Bible questions with score tracking
- **Bible Games**: Three engaging games to test your Bible knowledge
  - **Guess the Bible Character**: Solve clues to identify Bible characters
  - **Books of the Bible Order**: Arrange Bible books in correct order
  - **Match Person to Story**: Match Bible figures with their stories

## Design

- Dark mode interface for comfortable viewing
- Mobile-first responsive design
- Smooth animations and transitions
- Intuitive user interface

## Local Data

All content is stored locally using sample JSON data. No external APIs or databases required.

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── trivia/
│   │   ├── page.tsx        # Trivia page
│   │   └── trivia.module.css
│   └── games/
│       ├── page.tsx        # Games hub page
│       └── games.module.css
├── components/
│   └── games/
│       ├── GuessCharacter.tsx
│       ├── BooksOrder.tsx
│       ├── MatchPersonStory.tsx
│       └── games.module.css
├── data/
│   ├── trivia-data.ts      # Trivia questions
│   └── games-data.ts       # Game data
└── public/                 # Static assets
```

## Technologies

- **Next.js 15**: React framework
- **TypeScript**: Type safety
- **CSS Modules**: Scoped styling
- **React Hooks**: State management

## License

MIT
