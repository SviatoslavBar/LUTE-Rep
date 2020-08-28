import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PostInterface } from './postInterface';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
    providedIn:'root'
})
export class postService {
    private url;
    private url2;

    constructor(private http: HttpClient , private firestore: AngularFirestore){
        this.url = 'http://localhost:3000/postData';
        this.url2 = 'http://localhost:3000/faculties';
        
    }

    getPostData(): Observable<Array<PostInterface>>{
      return this.http.get<Array<PostInterface>>(this.url)
    };
    addPost(body: PostInterface): Observable<Array<PostInterface>>{
        return this.http.post<Array<PostInterface>>(this.url, body)
    };
    deletePost(body: PostInterface): Observable<Array<PostInterface>>{
      return this.http.delete<Array<PostInterface>>(`${this.url}/${body.id}`)
    }
    updatePost(body: PostInterface): Observable<Array<PostInterface>>{
      return this.http.put<Array<PostInterface>>(`${this.url}/${body.id}`, body)
    }
    getOnePostData(id: string): Observable<PostInterface>{
      return this.http.get<PostInterface>(`${this.url}/${id}`)
    }


    getMainPost(): Observable<Array<PostInterface>>{
      return this.http.get<Array<PostInterface>>(`${this.url}/?main=true&_sort=id&_order=DESC&_limit=3`)
    }
    getLatestPost(): Observable<Array<PostInterface>>{
      return this.http.get<Array<PostInterface>>(`${this.url}/?main=false&_sort=id&_order=DESC&_limit=6`)
    }
    getAllLatestPosts(): Observable<Array<PostInterface>>{
      return this.http.get<Array<PostInterface>>(`${this.url}/?_sort=id&_order=DESC&_limit=10&_page=`)
    }
    getDefaultLatest(): Observable<Array<PostInterface>>{
      return this.http.get<Array<PostInterface>>(`${this.url}/?_sort=id&_order=DESC&_limit=4`)
    }
    ////////////
    getAnnouncement(): Observable<Array<PostInterface>>{
      return this.http.get<Array<PostInterface>>(`${this.url}/?_sort=id&_order=DESC`)
    }
    ////////////
    getFaculty(id: string): Observable<PostInterface>{
      return this.http.get<PostInterface>(`${this.url2}/${id}`)
    }

}