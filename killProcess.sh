read -p "Enter your port number : " number
netstat -ano | findstr :$number

# TSKILL 9872 

echo Press Enter...
read