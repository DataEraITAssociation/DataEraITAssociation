---
title: CCC
sidebar_position: 1
sidebar_label: CCC
---

# Tutorial: Start Your Preparation on CCC
## We will improve our Java/Python skill with the following programs.

Visit the CEMC website for our first program, <a href="https://cemc.uwaterloo.ca/contests/computing/examples.html">Factorials.</a>

### Step 1:
Write a program to accept the input file (input01.txt) and output each line to the console. You will have to call it from your command line.
:::tip Tip
```jsx title="Command Line"
python3 myProgram.py < input01.txt
```
:::

### Step 2:
Write a program to calculate the factorial for a given **n** using a loop. Output a **single result.**
:::tip Tip
```jsx title="Use a loop like this:"
for x in range(n): result *= x
```
:::

### Step 3:
Write a program to calculate the factorial for a given n using a recursive. Output a **single result.**
:::tip Tip
```jsx title="Use a recursive function like this: "
def countfact(x):
    if x == 0: return 1
     return x * countfact(x-1)
```
:::

### Step 4:
Combine Step 1 with Step 2 and Step 3 by calling the input file (input02.txt) to process multiple factorial values. input02.txt has 500 lines. Output each value in 1 line. Please time the execution time of this program.
:::tip Note
Your program may be slow.
:::

### Step 5:
Study the <a href="https://cemc.uwaterloo.ca/contests/computing/examples.html">official solution.</a> Think of the question: Why does this program use a "set" array variable to store the value? Now improve it with the "set" so that your program can take advantage of the "cache" to help multiple programs.

### Step 6:
Output some random numbers into a .txt file so that we can test our program.
:::tip Tip
```jsx title="Command Line"
python generateInput.py > input03.txt
```
:::

### Step 7:
**Super hard!!!** (If you cannot solve this problem, it is fine. We will cover it later in our class.) Since the Python call stack limit is 1000, this recursive program will have an exception if any n > 1000. Think of a method to get along with it.
:::tip Tip
You may use a while-loop to replace the recursive function.
:::
