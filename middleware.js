// middleware.js

import { NextResponse } from 'next/server';

export function middleware(request) {
  const token = request.cookies.get('token');
  const url = request.nextUrl.clone();

  // Log the token and the URL for debugging purposes
  // console.log('Token:', token);
  // console.log('Request URL:', url.href);

  // Example: Redirect to login if token is not present
  if (!token) {
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  // Check user role from the token or server-side API
  // This example assumes you store user role in the token
  // Adjust this part as needed
  const userRole = 'admin'; // Replace with actual role extraction logic

  const allowedRoles = ['admin', 'manager', 'employee']; // Example roles

  if (allowedRoles.includes(userRole)) {
    return NextResponse.next(); // Allow access
  }

  // Redirect to 404 if the role is not authorized
  url.pathname = '/404';
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/admin/:path*', '/manager/:path*', '/employee/:path*'],
};
