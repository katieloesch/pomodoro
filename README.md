## Overview

1. [Description](#description)
2. [Deployment Link](#deployment-link)
3. [Installation](#installation)
4. [Technologies Used](#technologies)
5. [Deliverables](#deliverables)
6. [Planning/Build Process](#planning)
7. [Challenges](#challenges)
8. [Wins](#wins)
9. [Key Learnings & Takeaways](#takeaways)
10. [Future Improvements](#future-improvements)

---

## <a name="description"></a> 1. Description

## <a name="deployment-link"></a> 2. Deployment link

## <a name="installation"></a> 3. Installation

- package manager used: npm - v9.5.0
  - https://www.npmjs.com/package/npm
- to install dependencies, run:

```zsh
npm install
```

<br>

## <a name="technologies"></a> 4. Technologies Used

- This application is based in ReactJS (v18.3.1), JavaScript, JSX and SCSS.
  - it was created using the 'create-react-app' command
  - https://create-react-app.dev/

```zsh
npx create-react-app .
```

### UI

- fonts:
- icons:

### Additional tools used:

- Git / GitHub
  - used for version control
  - https://git-scm.com/
  - https://github.com/https://github.com/
- Visual Studio Code (VSCode)
  - code editor used for writing CSS, JSX and JavaScript
- Google Chrome browser
  - used for launching the website and displaying the application Google Chrome
- Google Chrome Developer Tools: For troubleshooting and debugging
  - https://www.google.com/intl/en_uk/chrome/

### Resources and tutorials:

- https://pomofocus.io/
- Youtube: [Build A Pomodoro Clock In React](https://www.youtube.com/watch?v=9EVmiQCfkuQ&list=PL5TCQHRtvHGkuR2YZDf_2lDFuc9m5OUlO&index=74) by [Nsquared Coding](https://www.youtube.com/@NsquaredCoding)
- Youtube: [Become a Productivity Pro with React: Creating a Pomodoro Timer with React](https://www.youtube.com/playlist?list=PL99EJ97HdCgLW4oypVviPU1HTtdv2jgB8) by [CodeWithCisco](https://www.youtube.com/@codewithcisco)

## <a name="deliverables"></a> 5. Deliverables

### MVP

### Stretch Goals

## <a name="planning"></a>6. Planning / Build Process

This was a solo project.

### User Stories

### Day 1 - 26/04/2024

I started this project by setting up a react app using the 'create-react-app' command.

```zsh
npx create-react-app .
```

### Day 2 - 28/04/2024

- timer logic

```JSX
    useEffect(() => {
        if (playing) {
           const intervalTimer = setInterval(() => {

            // Decrease timer seconds
            if (timerSec > 0) {
                setTimerSec(timerSec => timerSec-1)
            }

            // Decrease timer minutes
            if (timerSec === 0) {
                setTimerSec(59)
                let updatedTimer = {...activeTimer};
                updatedTimer.value -= 1;
                setActiveTimer(updatedTimer);
            }

            // Check if timer has finished
            if (activeTimer.value === 0 && timerSec === 0) {
                setPlaying(false)
                alert(`${activeTimer.label} finished!`)
                resetTimer();
            }

           }, 1000)
           return () => clearInterval(intervalTimer)
        }
    }, [playing, timerSec, activeTimer, resetTimer])
```

## 7. <a name="challenges"></a> Challenges

## 8. <a name="wins"></a> Wins

## <a name="takeaways"></a> 9. Key Learnings & Takeaways

## <a name="future-improvements"></a> 10. Future Improvements
