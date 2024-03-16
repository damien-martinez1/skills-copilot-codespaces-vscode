# write 'hello world' to the console
print('hello world')

# rock paper scissors game
valid_options = ['rock', 'paper', 'scissors']
player_choice = input("Choose 'rock', 'paper', or 'scissors': ").lower()

while player_choice not in valid_options:
    print("Invalid option. Please choose again.")
    player_choice = input("Choose 'rock', 'paper', or 'scissors': ").lower()

import random
computer_choice = random.choice(valid_options)

# i want to print the computer's choice and the player's choice to the console and show who won. i will use if statements to check the winner and print the result to the console. i  also want to give the player the option to play again. i will use a while loop to keep the game running until the player decides to stop playing.
# i want two integer variables that will keep track of the player's score and the computer's score. i will increment the score of the winner by 1 and print the score to the console after each round. i will also print the final score to the console after the player decides to stop playing.
player_score = 0
computer_score = 0
while True:
    print(f"Player chose {player_choice}")
    print(f"Computer chose {computer_choice}")

    if player_choice == computer_choice:
        print("It's a tie!")

    elif player_choice == 'rock' and computer_choice == 'scissors':
        print("Player wins!")
        player_score += 1

    elif player_choice == 'paper' and computer_choice == 'rock':
        print("Player wins!")
        player_score += 1

    elif player_choice == 'scissors' and computer_choice == 'paper':
        print("Player wins!")
        player_score += 1

    else:
        print("Computer wins!")
        computer_score += 1

    play_again = input("Do you want to play again? (yes/no): ").lower()
    while play_again not in ['yes', 'no']:
        print("Invalid option. Please choose 'yes' or 'no'.")
        play_again = input("Do you want to play again? (yes/no): ").lower()

    if play_again == 'no':
        break
    elif play_again == 'yes':
        player_choice = input("Choose 'rock', 'paper', or 'scissors': ").lower()
        while player_choice not in valid_options:
            print("Invalid option. Please choose again.")
            player_choice = input("Choose 'rock', 'paper', or 'scissors': ").lower()
        computer_choice = random.choice(valid_options)

print("Thank you for playing! Final score: ")
print(f"Player: {player_score}")
print(f"Computer: {computer_score}")
