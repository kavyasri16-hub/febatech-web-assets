'''
Required things to run this script:
params.py
To Be Uploaded Folder
'''

import os, boto3, params


bucket = 'axis-tax-drive'

s3 = boto3.resource('s3', region_name=params.default_region_name,
    aws_access_key_id=params.aws_access_key_id,
    aws_secret_access_key=params.aws_secret_access_key)

def upload_to_s3():


    path = './To Be Uploaded'

    for root,dirs,files in os.walk(path):
        for name in files:
            data = open("./To Be Uploaded/"+name, 'rb')
            s3.Bucket(bucket).put_object(Key=name, Body=data)
            object_acl = s3.ObjectAcl(bucket, name)
            object_acl.put(ACL='public-read')




upload_to_s3()


