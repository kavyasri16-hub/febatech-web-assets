from flask import Flask, render_template, request, redirect
import os, boto3, params
app = Flask(__name__)
app.debug = True



bucket = 'axis-tax-drive'

s3 = boto3.resource('s3', region_name=params.default_region_name,
    aws_access_key_id=params.aws_access_key_id,
    aws_secret_access_key=params.aws_secret_access_key,)

my_bucket = s3.Bucket(bucket)

files = []

for file in my_bucket.objects.all():
    files.append(file.key)



@app.route('/', methods=['GET'])
def dropdown():
    return render_template('feba.html', files=files)



@app.route('/dropdown', methods = ['POST'])
def dropp():
    key = request.form.get('file')
    url = f'https://{bucket}.s3.{params.default_region_name}.amazonaws.com/{key}'
    return render_template('feba.html', value = url, files = files, value_1 = key)



if __name__ == '__main__':
    app.run()

