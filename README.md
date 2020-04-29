# ISSUE SOLVED
##

* Use _npm start_ to start the dev server
* Use _npm test_ to run unit tests
* Use _npm run build_ to build for production

This is an application built with [AppRun](https://github.com/yysun/apprun).

## Description
Unable to switch between appRun components, using state in `main.tsx` 
While having the ability to switch between a functional and appRun component

I have 3 components: 
- Test1 (appRun component) 
- Test2 (appRun component) 
- Test3 (functional component)

I have 3 buttons that switch `state.content`

If I press "change to test1" it renders Test1 component, however, if I press "change to test2" it doesn't. But it does re-render tho, when I press "change to test3"

## To reproduce

```bash
npm && npm start
```

Click all the buttons and see that it changes only between test1||test2 and test3


## Expected behavior
Switch between all three components (Test1, Test2, Test3)
