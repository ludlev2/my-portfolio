import git

commit_message = 'Adding presidency'

repo = git.Repo('./')

repo.git.add('--all')
repo.git.commit('-m', commit_message)
origin = repo.remote(name='origin')
origin.push()