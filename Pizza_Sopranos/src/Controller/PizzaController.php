<?php

namespace App\Controller;

use App\Entity\Categorie;
use App\Entity\Order;
use App\Entity\Pizza;
use App\Forms\OrderType;
use App\Repository\CategorieRepository;

use App\Repository\OrderRepository;
use App\Repository\PizzaRepository;
use Doctrine\ORM\EntityManager;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;


class PizzaController extends AbstractController
{
    /**
     * @Route("/", name="pizza_home")
     */

    public function homepage( CategorieRepository $categorieRepository )
    {
        $categories = $categorieRepository->findAll();

        return $this->render('pizza/home.html.twig', ['categories'=>$categories]);
    }

    /**
     * @Route("/categorie/{id}", name="catrgorie")
     */
    public function categorie(CategorieRepository $categorieRepository, $id){
        
        $categorie = $categorieRepository->find($id);

        return $this->render('pizza/categorie.html.twig', [
            'categorie' => $categorie,

        ]);


    }

    /**
    * @Route("/order/{id}", name="order")
    */
    public function order( Request $request, $id, Pizza $pizza ,ManagerRegistry $managerRegistry){

        //$order = $pizzaRepository->find($id);



        $pizzaName = $pizza->getName();
        $pizzaPrice = $pizza->getPrice();
        $pizzaImg = $pizza->getImage();

        $entityManager = $managerRegistry->getManager();

        $order = new Order();

        $order->setPizza($pizza);

        $order->setStatus("in progress");

        $form = $this->createForm(OrderType::class, $order);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()){
             $order = ($form->getData());

             $entityManager->persist($order);
             $entityManager->flush();

             return $this->redirectToRoute('successMessage');
        }
        return $this->render('pizza/order.html.twig', [

            'pizza' => $pizzaName,
            'price' => $pizzaPrice,
            'img' => $pizzaImg,

            'form' => $form->createView(),

        ]);

    }

    /**
     * @Route("/successMessage", name="successMessage")
     */
    public function successMessage()
    {

        

        return $this->render('pizza/successMessage.html.twig');



    }

    /**
     * @Route("/orders", name="orders")
     */
    public function orders( OrderRepository $orderRepository, )
    {

        $orders = $orderRepository->findAll();

        return $this->render('pizza/orders.html.twig', ['orders'=>$orders]);



    }



    /**
     * @Route("/contact", name="pizza_contact")
     */
    public function contact( )
    {
        return $this->render('pizza/contact.html.twig');  
        
    }


}




