export const UserQueries = {

    getUser: `select * from users`,
    
    getUserById: `select * from users where id = ?`,

    addUser: `insert into users
    (name, phone, email, password, role_id, status, created_at, updated_at)
    values(?, ?, ?, ?, ?, ?, ?, NOW(), NOW())`,

    updateUserById: `update users
    set  user_name =?, phone_number = ?, email = ?, password = ?, user_address = ?, user_status =?,updated_at = NOW()
    where id = ? `,

    deleteUserById: `delete from users  where id = ?`,

    login: ` select * from users where email = ? and password =? `,

    changePassword: `update users  set password =? where email =?`,

    getUserByEmail: `select * from users where email = ?`,

    getUserByUserName: `select * from users where user_name =?`,

    getUserByPhone: `select * from users where phone_number = ?`,

    userId:`select * from users where id = ?`
}  


