# Redux Tutorial

> Learn Redux-Core + React-Redux + Redux-Thunk + Redux-Saga + Redux-Toolkit

## Author: Dev A.T Viet Nam

## Youtube: https://youtu.be/rYHYPW6EofI

## Getting started: 
  React: `npm start`    
  API: `npm run server`

## 🔥 Donate
> + 👉 Buy Me a Coffee . Thank You ! 💗 :
> + 👉 https://www.buymeacoffee.com/QK1DkYS
> + 👉 Paypal : https://paypal.me/tuananh251192

### 👻👻VietNam: 
> + 👉Vietcombank: 0061001044348 (LE TUAN ANH)
> + 👉Momo : 0374481936


I. Requirements
  - React, HTML, CSS, Javascript (DOM, ES6...)
  - Install:
    + Redux: `npm install redux`
    + React-Redux: `npm install react-redux`
    + Redux-Thunk: `npm install redux-thunk`
    + Redux-Saga: `npm install redux-saga`
    + Redux-Toolkit: `npm install @reduxjs/toolkit`
    + Redux-devtools-extension: `npm install redux-devtools-extension`
    + Redux devtools in Chrome
    + Json Server: `npm install json-server`
    + Axios: `npm install axios`

II. What will we learn?   
  1. Redux?   
    - Redux is an open-source JavaScript library for managing and centralizing application state.        
    - Redux là một thư viện JavaScript mã nguồn mở để quản lý và tập trung trạng thái ứng dụng.     
    ![alt](https://res.cloudinary.com/devatchannel/image/upload/v1650958059/redux/q0v61a2us4iixkpoyno9_sv0qfm.png)
 
  2. Store?   
    - As a single object used to store the State of the application, the state is read-only and cannot be changed directly, but must pass a new State returned by the reducer.    
    - Là một object duy nhất dùng để lưu trữ State của ứng dụng, state là read-only không thể thay đổi trực tiếp mà phải thông qua một State mới do reducer trả về.      

  3. Reducers?    
    - As pure functions that rely on actions to update state in the store, they take the current state of the app, perform an action, and return a new state.   
    - Là một pure functions dựa vào các action để update state trong store, chúng lấy state hiện tại của app, thực hiện một action và trả về một state mới.    

  4. Actions?   
    - An action is a plain JavaScript object that has a `type` field. You can think of an action as an event that describes something that happened in the application.     
    - Một Action là một plain JavaScript object có một thuộc tính `type`. Bạn có thể coi một action là một sự kiện mô tả điều gì đó đã xảy ra trong ứng dụng.     

  5. View?   
    - Render UI based on current State, get changes from store to render.        
    - Hiển thị giao diện người dùng dựa trên State hiện tại, lấy các thay đổi từ store để hiển thị.    

  6. Data Flow.
  ![alt](https://res.cloudinary.com/devatchannel/image/upload/v1650857587/redux/redux-one-way-data-flow_mjqffd.png)

  - View executes an event -> Actions describes the event as an object -> State relies on the action and updates the new state -> View is re-rendered when the state updates.     
  - View thực hiện một event -> Action mô tả lại event đó dưới dạng một object -> State dựa vào action và tiến hành cập nhật lại state mới -> View được render lại khi state cập nhật.     

  7. Redux structure and how it works.    
  ![alt](https://res.cloudinary.com/devatchannel/image/upload/v1650857589/redux/reduxdataflowdiagram-49fa8c3968371d9ef6f2a1486bd40a26_aafsjz.gif)

  - View performs an event -> Action describes that event as an object -> Dispatch action to Reducer for processing -> Reducer receives action, after processing returns a new State -> Store receives a new state from reducer and proceeds update  -> View subscribed to the store will receive the change and update the UI again.   
  - View thực hiện một event -> Action mô tả lại event đó dưới dạng một object -> Dispatch action đến Reducer xử lý -> Reducer nhận action, xử lý xong trả về một State mới -> Store nhận một state mới từ reducer và tiến hành cập nhật -> View đã được subscribe đến store sẽ nhận được sự thay đổi và tiến hành cập nhật lại UI.     

  8. React-Redux.    
    - Is the official Redux UI binding library for React applications and it is maintained by the Redux team.     
    - Là thư viện ràng buộc giao diện người dùng Redux chính thức cho các ứng dụng React và nó được duy trì bởi nhóm Redux.    

  9. Redux Middleware.   
    - The middleware that sits in front of Reducers allows writing functions with internal logic that can interact with getState and dispatch methods.    
    - Phần mềm trung gian nằm phía trước Reducers cho phép viết các hàm với logic bên trong có thể tương tác với các phương thức getState và dispatch.    
    ![alt](https://res.cloudinary.com/devatchannel/image/upload/v1650957046/redux/1_z4llp0o7378Wwz4zoRsalw_lv5nnf.gif)

  10. Redux-Thunk.   
    - As a middleware that helps you to handle asynchronous actions in Redux (action can be a function instead of an object).    
    - Là một phần mềm trung gian giúp bạn có thể xử lý các action bất đồng bộ trong Redux (action có thể là một function thay vì object).   

  11. Redux-Saga.   
    - As a redux middleware library, it makes managing side effects in redux applications simpler. By taking full advantage of ES6's Generators ( function* ) feature, it allows us to write async code that looks like synchronos.   
    - Là một thư viện redux middleware, giúp quản lý những side effect trong ứng dụng redux trở nên đơn giản hơn. Bằng việc sử dụng tối đa tính năng Generators ( function* ) của ES6, nó cho phép ta viết async code nhìn giống như là synchronos.      

  12. Redux-Toolkit.    
    - Is a toolkit to help us configure and write Redux in a simpler and easier to understand way.    
    - It has built-in Redux, Redux-Thunk, Immerjs library, Redux DevTools Extension and RTK-Query..etc.   
    - Là bộ công cụ giúp chúng ta cấu hình và viết Redux một cách đơn giản và dễ hiểu hơn.   
    - Nó được tích hợp sẵn Redux, Redux-Thunk, Immerjs library, Redux DevTools Extension và RTK-Query..v.v.   