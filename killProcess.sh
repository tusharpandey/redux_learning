read -p "Enter your port number : " number
netstat -ano | findstr :$number

# ADD PID
# TSKILL 9860 

echo Press Enter...
read