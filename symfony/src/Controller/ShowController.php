<?php

namespace App\Controller;

use App\Entity\Show;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class ShowController extends AbstractController
{
    /**
     * @Route("/show", name="show")
     */
    public function index()
    {
        return $this->render('show/index.html.twig', [
            'controller_name' => 'ShowController',
        ]);
    }

    /**
     * @Route("/api/shows/create", name="create_show")
     */
    public function create(ValidatorInterface $validator): Response
    {
        // you can fetch the EntityManager via $this->getDoctrine()
        // or you can add an argument to the action: createProduct(EntityManagerInterface $entityManager)
        $entityManager = $this->getDoctrine()->getManager();

        $show = new Show();
        $show->setName('The Big Bang Theory');
        $show->setUrl('series/big-bang-theory');
        $show->setImageUrl('https://images-na.ssl-images-amazon.com/images/I/812mQf4tldL._RI_.jpg');

        $errors = $validator->validate($show);
        if (count($errors) > 0) {
            return new Response((string) $errors, 400);
        }

        // tell Doctrine you want to (eventually) save the Product (no queries yet)
        $entityManager->persist($show);

        // actually executes the queries (i.e. the INSERT query)
        $entityManager->flush();

        return new Response('Saved new show with id '.$show->getId());
    }

    /**
     * @Route("/api/shows/update/{id}")
     */
    public function update($id)
    {
        $entityManager = $this->getDoctrine()->getManager();
        $show = $entityManager->getRepository(Show::class)->find($id);

        if (!$show) {
            throw $this->createNotFoundException(
                'No show found for id '.$id
            );
        }

        $show->setName('New show name!');
        $entityManager->flush();

        return $this->redirectToRoute('show_details', [
            'id' => $show->getId()
        ]);
    }

    /**
     * @Route("/api/shows/delete/{id}")
     */
    public function delete($id)
    {
        $entityManager = $this->getDoctrine()->getManager();
        $show = $entityManager->getRepository(Show::class)->find($id);

        if (!$show) {
            throw $this->createNotFoundException(
                'No show found for id '.$id
            );
        }

        $entityManager->remove($show);
        $entityManager->flush();

        $response = new Response();
        $response->headers->set('Content-Type', 'application/json');
        return $response;
    }

    /**
     * @Route("api/shows", name="show_list")
     */
    public function getList()
    {
        $shows = $this->getDoctrine()->getRepository(Show::class)->findAll();
        $serialized = $this->serializeShows($shows);
        $response = new Response();
        $response->setContent(json_encode($serialized));
        $response->headers->set('Content-Type', 'application/json');
        return $response;
    }

    /**
     * @Route("api/shows/{id}", name="show_details")
     */
    public function getSingle($id)
    {
        $show = $this->getDoctrine()
            ->getRepository(Show::class)
            ->find($id);

        if (!$show) {
            throw $this->createNotFoundException(
                'No show found for id '.$id
            );
        }

        $response = new Response();
        $response->setContent(json_encode($this->serializeShow($show)));
        $response->headers->set('Content-Type', 'application/json');
        return $response;
    }

    private function serializeShows(Array $shows): Array {
        $serialized = [];
        foreach ($shows as $show) {            
            $serialized[] = $this->serializeShow($show);
        }
        return $serialized;
    }

    private function serializeShow(Show $show): Array {
        return [
            'id' => (string) $show->getId(),
            'name' => $show->getName(),
            'url' => $show->getUrl(),
            'imageUrl' => $show->getImageUrl(),
        ];
    }
}
