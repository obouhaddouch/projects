<?php

namespace App\Entity;

use App\Repository\SizeRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: SizeRepository::class)]
class Size
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    private $name;

    #[ORM\OneToMany(mappedBy: 'size', targetEntity: Order::class)]
    private $orders;

//    #[ORM\Column(type: 'string', length: 255)]
//    private $Large;
//
//    #[ORM\Column(type: 'string', length: 255)]
//    private $large;
//
//    #[ORM\Column(type: 'string', length: 255)]
//    private $medium;
//
//    #[ORM\Column(type: 'string', length: 255)]
//    private $small;

    public function __construct()
    {
        $this->orders = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return Collection<int, Order>
     */
    public function getOrders(): Collection
    {
        return $this->orders;
    }

    public function addOrder(Order $order): self
    {
        if (!$this->orders->contains($order)) {
            $this->orders[] = $order;
            $order->setSize($this);
        }

        return $this;
    }

    public function removeOrder(Order $order): self
    {
        if ($this->orders->removeElement($order)) {
            // set the owning side to null (unless already changed)
            if ($order->getSize() === $this) {
                $order->setSize(null);
            }
        }

        return $this;
    }

    public function getLarge(): ?string
    {
        return $this->Large;
    }

    public function setLarge(string $Large): self
    {
        $this->Large = $Large;

        return $this;
    }

    public function getMedium(): ?string
    {
        return $this->medium;
    }

    public function setMedium(string $medium): self
    {
        $this->medium = $medium;

        return $this;
    }

    public function getSmall(): ?string
    {
        return $this->small;
    }

    public function setSmall(string $small): self
    {
        $this->small = $small;

        return $this;
    }
}
