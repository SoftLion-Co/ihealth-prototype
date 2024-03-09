import React from 'react'


const page = ({params}:{params:any}) => {
  const blogName = params.blogName;
  return (
    <div>Single Blog Page. {blogName}</div>
  )
}

export default page