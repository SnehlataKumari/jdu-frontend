import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';

// import * as AWS from "aws-sdk";
import { environment } from 'src/environments/environment';
import { Progress } from 'aws-sdk/lib/request';

@Injectable({
  providedIn: 'root'
})
export class S3Service {

  s3Client;
  bucketName;

  constructor() {
    this.bucketName = environment.S3Bucket;
    AWS.config.update({
      accessKeyId: environment.AWSAccessKeyId,
      secretAccessKey: environment.AWSSecretKey,
      region: environment.AWSregion,
    });

    this.s3Client = new S3({ apiVersion: '2006-03-01' });
  }
  
  uploadFile(
    fileName,
    fileData
  ) {
    const params = {
      Bucket: this.bucketName,
      Key: fileName,
      ACL: 'public-read',
      Body: fileData,
    };

    const req = new S3.ManagedUpload({
      params
    });

    return req;
  }

}
