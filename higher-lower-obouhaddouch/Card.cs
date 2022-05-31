using System;
using System.Collections.Generic;
using System.Text;

namespace ProjectHigherLower
{
    // Vervang de class Card met de Card van card-assignment opdracht zodra die af is.
    class Card
    {
        // Attributes
        private string suit;
        private string colour;
        private string value;
        private int points;
        private static string[] allowedValues = { "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A" };
        private static string[] suit_AL = { "Heart", "Diamond", "Club", "Spade" };
        /*
         * Constructor
         */
        public Card(string value, string suit, int points)
        {
            this.SetValue(value);
            this.SetSuit(suit);
            this.points = points;
        }

        
        /**
         * This mehtod prints the card e.g. 2♡ or J♤
         */
        public void PrintCard()
        {
            Console.BackgroundColor = ConsoleColor.White;
            if (GetColour() == "red")
            {
                Console.ForegroundColor = ConsoleColor.Red;

            }
            else if (GetColour() == "black")
            {
                Console.ForegroundColor = ConsoleColor.Black;

            }
            Console.Write($"{value} {suit}");
            Console.ResetColor();
        }
        public bool CheckValue(string value)
        {
            bool isAllowed = false;
            for (int i = 0; i < allowedValues.Length; i++)
            {
                if (value == allowedValues[i])
                {
                    isAllowed = true;
                }
            }
            return isAllowed;
        }
        public int GetPoints()
        {
            return points;
        }
        public void SetSuit(string suit)
        {
            if (suit == "Heart" || suit == "Diamond" || suit == "Club" || suit == "Spade")
            {
                this.suit = suit;
                this.colour = GetColour(suit);
            }
            else
            {
                throw new Exception("Could not find the specified suit.");
            }
        }
        public void SetValue(string value)
        {
            if (CheckValue(value))
            {
                this.value = value;
            }
            else
            {
                throw new Exception("This value of a card is not allowed");
            }
        }
        public string GetColour()
        {
            return this.colour;
        }
        public string GetColour(string suit)
        {
            if (suit == "Heart" || suit == "Diamond")
            {
                return "red";
            }
            else if (suit == "Club" || suit == "Spade")
            {
                return "black";
            }
            else
            {
                throw new Exception("Could not find the specified suit.");
            }
        }
        public static string[] GetAllowedCardValues()
        {
            return allowedValues;
        }
        public static string[] GetAllowedSuit()
        {
            return suit_AL;
        }
        public string GetSuit()
        {
            return suit;
        }
        public string GetValue()
        {
            return value;
        }
    }
}
