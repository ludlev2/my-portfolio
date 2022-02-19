import git

commit_message = 'Adding presidency'

repo = git.Repo('./.git')

repo.git.add('--all')
repo.git.commit('-m', commit_message)
repo.git.push("origin", "HEAD:refs/for/main")
