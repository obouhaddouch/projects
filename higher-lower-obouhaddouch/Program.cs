using System;

namespace ProjectHigherLower
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Project Higher Lower - The card guessing game.");
            Deck D = new Deck();
            for (int i = 0; i < D.GetTotalCards(); i++)
            {
                  
                Console.WriteLine();
                Console.WriteLine( $"======={i+1}======");
                

                D.GetRandomCr().PrintCard();

                Console.Write(" H of L : ");
                string an = Console.ReadLine();

                

            }
            Console.ReadLine();

        }
    }
}
