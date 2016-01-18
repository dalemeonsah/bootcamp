#fizzbuzz
for num in 1..100
  if num % 5 == 0 && num % 3 == 0
    print "FizzBuzz"
  elsif num % 3 == 0
    print "Fizz"
  elsif num % 5 == 0
    print "Buzz"
  else
    print "#{num} is not a fizzbuzz"
  end
end