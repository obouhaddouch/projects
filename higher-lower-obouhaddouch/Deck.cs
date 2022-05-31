using System;
using System.Collections.Generic;
using System.Text;

namespace ProjectHigherLower
{
    class Deck
    {
        private List<Card> cards;
        public Deck()
        {
            cards = new List<Card>();
            this.GenerateDeck();
        }
        public void GenerateDeck()
        {
            cards.Clear();
            string[] valueS = Card.GetAllowedCardValues();
            string[] suits = Card.GetAllowedSuit();

            for (int i = 0; i < valueS.Length; i++)
            {
                for (int j = 0; j < suits.Length; j++)
                {
                    Card card = (new Card(valueS[i], suits[j], (i + 2)));

                    cards.Add(card);
                    Console.WriteLine();
                    card.PrintCard();
                    Console.WriteLine();
                }
            }
        }
        public int GetTotalCards()
        {
            int total = cards.Count;
            return total;
        }
        public void Add(Card C)
        {
            cards.Add(C);
        }
        public void Remove(Card C)
        {
            cards.Remove(C);
        }
        public Card GetRandomCr()
        {
            Random ren = new Random();
            int renNum = ren.Next(0, cards.Count);
            return cards[renNum];
        }
    }
}
