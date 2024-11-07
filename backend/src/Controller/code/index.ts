import Docker from 'dockerode';

const docker = new Docker({
  socketPath: '\\\\.\\pipe\\docker_engine'  
});


async function createAndRunContainer(): Promise<void> {
    try {
        // Create a new container with the same image
        const container = await docker.createContainer({
            Image: 'outline-setup',  // Use the minimal image built
            Tty: true,                // Allocate a TTY for interactive use (optional)
            Cmd: ['/bin/bash']        // Default command (bash)
        });

        // Start the container
        await container.start();
        console.log(`Container started with ID: ${container.id}`);
    } catch (err) {
        console.error('Error starting container:', err);
    }
}

createAndRunContainer()
    .catch(err => console.error('Error starting container:', err));
