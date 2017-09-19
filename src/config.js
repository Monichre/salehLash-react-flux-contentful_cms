
// config.js
export const config =  {
	title: "Saleh Lash",
	
  bucket: {
    slug: 'saleh-lash',
    media_url: 'https://cosmicjs.com/uploads',
    read_key: 'ZgSQ6KvuioDnW7y5pNyTDoBHCbgzwJTwue26ZcnOJsRzO5iXqF',
    write_key: 'rNSBNMwbF4ehCK4EgWdjkLjr4fj00MezTOk2ZDBP2d61UI77Zj'
  },
  email_info : {
    host: 'smtp.gmail.com',
	  port: 465,
	  secure: true,  // secure:true for port 465, secure:false for port 587
	  auth: {
	      user: 'liamhellis@gmail.com',
	      pass: '102IndiaStreet'
	  }
  }
}
