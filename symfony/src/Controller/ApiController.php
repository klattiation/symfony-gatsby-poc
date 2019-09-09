<?php
namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class ApiController extends AbstractController
{
  /**
   * @Route("/api/series")
   */
  public function series()
  {
    $series = [
      [
        'id' => '0',
        'name' => 'Rick and Morty',
        'url' => 'series/rick-and-morty/',
      ],
      [
        'id' => '1',
        'name' => 'Dark',
        'url' => 'series/dark/',
      ],
      [
        'id' => '2',
        'name' => 'Better Call Saul',
        'url' => 'better-call-saul',
      ],
      [
        'id' => '3',
        'name' => 'Adventure Time',
        'url' => 'series/adventure-time/',
      ],
      [
        'id' => '4',
        'name' => 'Game of Thrones',
        'url' => 'got/',
      ],
      [
        'id' => '5',
        'name' => 'Vikings',
        'url' => '/series/vikings/',
      ],
      [
        'id' => '6',
        'name' => 'Breaking Bad',
        'url' => '/series/breaking-bad',
      ],
      [
        'id' => '7',
        'name' => 'Big Bang Theory',
        'url' => '/series/big-bang-theory',
      ],
      // [
      //   'id' => '8',
      //   'name' => 'The Simpsons',
      //   'url' => '/series/simpsons',
      // ],
    ];
    $response = new Response();
    $response->setContent(json_encode($series));
    $response->headers->set('Content-Type', 'application/json');
    
    return $response;
  }
}