# Hyunho Lim - Portfolio

AI/ML Engineer의 포트폴리오 웹사이트

## 프로젝트 구조

```
/
├── src/              # 홈페이지 소스 (React + Vite)
├── public/           # 정적 파일 (이미지, 파비콘 등)
├── resume/           # 이력서 프로젝트 (별도 React 앱)
├── index.html        # 홈페이지 엔트리
└── package.json      # 홈페이지 의존성
```

## 개발 환경 설정

### 1. Node.js 설치

```bash
# Homebrew를 사용하는 경우
brew install node

# 또는 nvm 사용 권장
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install --lts
```

### 2. 의존성 설치

```bash
# 루트 프로젝트 (홈페이지)
npm install

# 이력서 프로젝트
cd resume
npm install
cd ..
```

### 3. 개발 서버 실행

```bash
# 홈페이지 개발 서버 (포트 5173)
npm run dev

# 이력서 개발 서버 (포트 5174)
cd resume
npm run dev
```

## 빌드

```bash
# 홈페이지 빌드
npm run build

# 이력서 빌드
cd resume
npm run build
```

빌드된 파일은 각각 `dist/` 폴더에 생성됩니다.

## 새 프로젝트 추가하기

`src/App.tsx` 파일의 `projects` 배열에 새 프로젝트를 추가하세요:

```typescript
const projects: Project[] = [
  {
    id: 'resume',
    title: '이력서',
    titleEn: 'Resume',
    description: 'AI/ML 엔지니어 임현호의 이력서',
    descriptionEn: 'Resume of Hyunho Lim, AI/ML Engineer',
    link: '/resume',
    tags: ['React', 'TypeScript', 'Vite']
  },
  // 여기에 새 프로젝트 추가
  {
    id: 'new-project',
    title: '새 프로젝트',
    titleEn: 'New Project',
    description: '프로젝트 설명',
    descriptionEn: 'Project description',
    link: '/new-project',
    tags: ['Tag1', 'Tag2']
  }
]
```

## 배포

GitHub Pages에 배포하려면:

1. 빌드 실행
2. `dist/` 폴더의 내용을 배포
3. `resume/dist/`는 `/resume` 경로에 배포

---

## 이전 HTML 이력서 파일

- `index-old.html`: 이전 한글 이력서 (백업)
- `en-old.html`: 이전 영문 이력서 (백업)

필요시 복원 가능합니다.
