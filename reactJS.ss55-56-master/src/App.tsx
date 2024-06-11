import React from "react";

export default function App() {
  return (
    <div>
      {/* 
      Bài 3:
        - method: GET
        - URL: http://localhost:3000/post
        - chức năng: Cho phép người dùng lấy danh sách tất cả các post có trong hệ thống, khi gọi
        phương thức này sẽ nhận được một mảng các đối tượng post. Mỗi đối tượng chứa các thông tin như:
        id, title, thumbnail, created_at, created_by, comments.
      
      Bài 4:
        - sử dụng method GET để lấy thông tin một bài viết theo id
        - URL: http://localhost:3000/posts/:id
        - ví dụ: http://localhost:3000/posts/2
        - chức năng sẽ cho phép người dùng lấy thông tin chi tiết của một bài viết cụ thể trong hệ thống dựa 
        trên ID của bài viết đó. đưa ra các thông tin như id, title, thumbnail, created_at, created_by, 
        comments.
      
      Bài 5:
        - sử dụng method DELETE để xóa thông tin bài viết theo id
        - URL: http://localhost:3000/posts/:id
        - ví dụ: http://localhost:3000/posts/2 
        - chức năng cho phép người dùng xóa một bài viết cụ thể trong hệ thống dựa trên ID của bài viết đó và
        không thể khôi phục lại được

      Bài 6:
        - sử dụng method GET để lấy thông tin tất cả bài viết theo tác giả
        - URL: http://localhost:3000/post?created_by=:created_by
        - ví dụ: http://localhost:3000/post?created_by=Phạm Trung Hiếu
        - chức năng cho phép người dùng lấy danh sách tất cả các bài viết trong hệ thống dựa trên tác giả của 
        bài viết. Sẽ nhận được đối tượng bài viết chứa các thông tin như: id, title, thumbnail, created_at, 
        created_by, comments.
    */}
    </div>
  );
}
