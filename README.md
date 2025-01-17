# THE BACKSTOP

THE BACKSTOP is a set of utilities for handlers and players of [_Delta Green: The Role-playing Game_](#what-is-delta-green).

> **BACKSTOPPING**: An extremely in-depth cover. A whole new identity right down to the birth certificate.
> 
> _Delta Green: Agent's Handbook, page 174_

## Dependencies

* Ruby 3.4+
* Rails 8.0+
* NodeJS 23.6+
* PostgreSQL 16.0+
* [Overmind](https://github.com/DarthSim/overmind)

## Setup

* Clone the repo
* Add `PATH=".git/safe/../../bin:$PATH"` to your `.bashrc` or `.zshrc` ([Why?](https://robots.thoughtbot.com/but-i-dont-want-to-bundle-exec))
* Run `./bin/setup` (You'll want to run `./bin/update` on subsequent pulls)
* Configure `config/database.yml` to point to your development database

## Starting the server

THE BACKSTOP use [Overmind](https://github.com/DarthSim/overmind) to run the development server and all service dependencies.

Run `overmind start -f Procfile.dev` to start all the processes.

### Debugging with Pry
To debug with [Pry](https://github.com/pry/pry), you'll have to connect to the web process using [Overmind](https://github.com/DarthSim/overmind). Typing `overmind connect web` in your terminal will open up the underlying tmux connection for that specific process, allowing you to use [Pry](https://github.com/pry/pry) like normal.

## Style Guidelines

* [Javascript](https://github.com/thoughtbot/guides/tree/master/style/javascript)
* [Html](https://github.com/thoughtbot/guides/tree/master/style/html)
* [Rails](https://github.com/thoughtbot/guides/tree/master/style/rails)
* [Ruby](https://github.com/bbatsov/ruby-style-guide)

## What is Delta Green

> ### Welcome to the Apocalypse
>
> Born of the U.S. government's 1928 raid on the degenerate coastal town of Innsmouth, Massachusetts, the covert agency known as *Delta Green* opposes the forces of darkness with honor but without glory. *Delta Green* agents fight to save humanity from unnatural horrors-often at a shattering personal cost.

*Delta Green* is a tabletop roleplaying game created by Adam Scott Glancy, Dennis Detwiller, and John Scott Tynes and published by [Arc Dream Publishing](https://arcdream.com). In **DELTA GREEN: THE ROLE-PLAYING GAME**, you are one of those agents. You fight to keep terrors from beyond space and time from infecting the world and claiming human lives and sanity.

Learn more at:

* [https://delta-green.com](https://delta-green.com)
* [Arc Dream Publishing](https://arcdream.com)
