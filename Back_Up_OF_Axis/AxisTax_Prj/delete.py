# import os
#
# path = './To Be Uploaded'
#
# for root, dirs, files in os.walk(path, topdown=False):
#     for name in files:
#         print(os.path.join(root, name))
#
#     # for name in dirs:
#     #     print(os.path.join(root, name))


# with open('To Be Uploaded/BackUp.txt') as f:
#     print(f)



import os

path = './To Be Uploaded'

print(os.walk(path, topdown=False))

for root, dirs, files in os.walk(path, topdown=False):
    # for name in files:
    #     print(os.path.join(root, name))
    #
    # for name in dirs:
    #     print(os.path.join(root, name))
    print(root)
    print(dirs)
    print(files)
    print(os.path.join(path))
    for name in files:
        print(name)
