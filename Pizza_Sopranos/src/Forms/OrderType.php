<?php

namespace App\Forms;



use App\Entity\Size;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;


class OrderType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options):void
    {
        $builder
            ->add('fname', TextType::class, ['label' => 'Voornaam'])
            ->add('sname', TextType::class, ['label' => 'Achternaam'])
//            ->add('email', TextType::class, ['label' => 'Email adres'])
            ->add('address', TextType::class, ['label' => 'Adres'])
            ->add('city', TextType::class, ['label' => 'Stad'])
            ->add('zipcode', TextType::class, ['label' => 'Postcode'])

            ->add('size', EntityType::class,[
                'class' => Size::class,
                'choice_label' => 'name',
            ])

            ->add('save', SubmitType::class, ['label' => 'Bestellen'])
        ;

    }

}