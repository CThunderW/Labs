# IN Ruby, we use the "irb" command to write interactive
# code like "node".  

#At CodeCore, we use pry.

# L O G G I N G     T O     T H E   C O N S O L E
print "Hello, World!\n✌️" # logs without creating new line
puts  "Hello, World!\n✌️"   # logs with a new line
p  "Hello, World!\n✌️"  # displays value as is with double quotes and other notations.

# TO EXECUTE A RUBY FILE, ENTER "ruby <filename>" in the CLI.

# V A R I A B L E S
#   creating and assigning a variable does not require any keyword like in JS.
a = 10
b = 5
c = a * b
puts c


# G E T T I N G  U S E R   I N P U T
puts "What's up?"
answer = gets
puts answer

#When using "gets", the newline character from pressing Enter is saved.
#To remove the  character, use gets.chomp. 

print "What is your first name?\n>"
first_name = gets.chomp
print "What is  your last name?\n>"
last_name = gets.chomp
puts (first_name + " " + last_name)


# S T R I N G S  
#StRiNg InTeRpOlAtIoN
greeting = "hi"
person = "Jane"

"#{greeting}, #{person}!"

#MuTaBlE StRiNgS
#in  Ruby, strings can be changed in place without  changing their variable name.

str = "bob"
str_a = str
str[0] = "J"
puts str  #  logs "Job"
puts str_a  # ALSO logs "Job"

#   M E T H O D     W I T H     A   B A N G
# ruby methods  that end with "!" mutate the object.  

[1] pry(main)> a =  "TEST test"
=> "TEST test"
[2] pry(main)> a.swapcase
=> "test TEST"
[3] pry(main)> a
=> "TEST test"
[4] pry(main)> a.swapcase!
=> "test TEST"
[5] pry(main)> a
=> "test TEST"
[6] pry(main)> 


# C O N T R O L     F L O W
#INLINE CONDITIONALS
puts "Hello!" if true 
#is the same as
if true
    puts "Hello"
end


#L O O P S

count = 1
while count <= 100 do
    puts count
    count += 1
end


#   R A N G E S
# number..100 is a range.
# this of a range as an array where its values
# have not been created yet.  
# THEY'RE CREATED ON DEMAND.

for n in number..100
    puts name
end

#looping in reverse
for n in (100).downto(number)
    puts n
end