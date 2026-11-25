const V={email:s=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s),phone:s=>/^[6-9]\d{9}$/.test(s),min:(s,n)=>String(s).trim().length>=n,password:s=>/^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(s)};
