<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class AdminController extends Controller
{
    const PATH_VIEW = 'admin.entities.';

    const CONTROLLER = 'Admin\AdminController@';

    public function dashboard(Request $request)
    {
        try {


        $token = $request->token;

        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . $token,
        ])->get('http://127.0.0.1:3000/api/scores/hasValidate');
        $data = json_decode($response->body())->data;

        return view(self::PATH_VIEW . 'dashboard')->with([
            "scores" => $data
        ]);

        }catch (\Exception $exception){
            return redirect()->back()->with('error', 'Something went wrong');
        }
    }


    public function validateScore(Request $request, $id)
    {
        try {


        $token = $request->token;
        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . $token,
        ])->put('http://127.0.0.1:3000/api/scores/validate/' . $id);
        $data = json_decode($response->body())->data;

        return redirect()->action([self::class, 'dashboard']);
        }catch (\Exception $exception){
            return redirect()->back()->with('error', 'Something went wrong');
        }
    }

    public function refuse(Request $request, $id)
    {
        try {


        $token = $request->token;
        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . $token,
        ])->put('http://127.0.0.1:3000/api/scores/refuse/' . $id);
        $data = json_decode($response->body())->data;

        return redirect()->action([self::class, 'dashboard']);
        }catch (\Exception $exception){
            return redirect()->back()->with('error', 'Something went wrong');
        }
    }

    public function logout(Request $request)
    {
        session()->forget('auth');
        session()->forget('user');
        session()->forget('token');


        return redirect('/')->with('success', 'Logout successfully');
    }


}
