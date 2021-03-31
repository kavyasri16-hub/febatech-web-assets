from flask import Flask, render_template, request, redirect
import os, boto3, params
app = Flask(__name__, template_folder='templates')
app.debug = True


s3 = boto3.resource('s3', region_name=params.default_region_name,
    aws_access_key_id=params.aws_access_key_id,
    aws_secret_access_key=params.aws_secret_access_key)


bucket = params.bucket_name

my_bucket = s3.Bucket(bucket)

@app.route('/', methods=['GET'])
def dropdown():
    files = []

    for file in my_bucket.objects.all():
        files.append(file.key)
    return render_template('feba_1.html', files = files)



@app.route('/', methods = ['POST'])
def dropp():
    full_path = request.form.get('txtUserName')
    for root,dirs,files in os.walk(full_path):
        print(files)
        for name in files:
            data = open(full_path+"\\"+name, 'rb')
            s3.Bucket(bucket).put_object(Key=name, Body=data)
            object_acl = s3.ObjectAcl(bucket, name)
            object_acl.put(ACL='public-read')
    files = []

    for file in my_bucket.objects.all():
        files.append(file.key)
    return render_template('feba_2.html', files = files)


@app.route('/dropdown', methods = ['POST'])
def droppp():
    print("Triggered")
    files = []

    for file in my_bucket.objects.all():       files.append(file.key)
    key = request.form.get('file')
    url = f'https://{bucket}.s3.{params.default_region_name}.amazonaws.com/{key}'
    return render_template('feba_2.html', value=url, files=files, value_1=key)






if __name__ == '__main__':
    app.run()

