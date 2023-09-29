// ------------ One way of doing it-------

// import middleware from 'next-auth/middleware';
// export default middleware;


// -----Other way of doing the same-------

export { default } from 'next-auth/middleware'

export const config = {
    matcher : ['/users']
}

//  This is for protecting routes , when the session is gone or expired it checks that.