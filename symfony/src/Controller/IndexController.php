<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Console\Application;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpKernel\KernelInterface;
use Symfony\Component\Console\Input\ArrayInput;
use Symfony\Component\Console\Output\BufferedOutput;
use Symfony\Component\Process\Exception\ProcessFailedException;

use Symfony\Component\Process\Process;

class IndexController extends AbstractController
{
  /**
   * @Route("/")
   */
  public function index()
  {
    $number = random_int(0, 100);

    return $this->render('index.html.twig');
  }

  /**
   * @Route("/publish")
   */
  public function publish(KernelInterface $kernel)
  {
    $process = Process::fromShellCommandline('cd ../.. && make build');
    $process->run();
    $process->wait();
    if (!$process->isSuccessful()) {
      throw new ProcessFailedException($process);
    }
    return new Response($process->getOutput());
  }
}